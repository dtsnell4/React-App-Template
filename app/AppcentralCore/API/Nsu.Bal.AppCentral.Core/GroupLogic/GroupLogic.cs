using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Nsu.Common.AppCentral.Core;
using Nsu.Dal.AppCentral.Core;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;
using Nsu.Bal.AppCentral.Core.AppInfo;

namespace Nsu.Bal.AppCentral.Core.GroupLogic
{
    public class GroupLogic : IGroupLogic
    {
        private readonly IAppCentralAppContext _db;
        private readonly ICoreAppInfo _appInfo;

        public GroupLogic(IAppCentralAppContext db, ICoreAppInfo app)
        {
            _db = db;
            _appInfo = app;
            //_appInfoLogic = appInfoLogic;
            //_db.SetApplication(_appInfo.AppId);
        }
        //get all groups for app instance 
        public async Task<IEnumerable<GroupViewModel>> GetAll(int inId)
        {
            List<Group> groups = new List<Group>();
            if(inId == 0)
            { groups = await _db.Groups.ToListAsync(); }
            else { groups = await _db.Groups.Where(g => g.ApplicationInstance.Id == inId).ToListAsync();}
            
            var vm = Mapper.Map<IEnumerable<Group>, IEnumerable<GroupViewModel>>(groups);
            return vm;
        }

        public async Task<GroupViewModel> Add(CreateGroupViewModel create)
        {
            return await Add(create.Name);
        }

        public async Task<GroupViewModel> Add(string name)
        {
            var g = _db.Groups.Create();
            g.Name = name;
            g.ApplicationInstance = new ApplicationInstance { Id = _appInfo.InstanceId };
           
            var changes = await _db.SaveChangesAsync();

            var vm = Mapper.Map<Group, GroupViewModel>(g);

            return vm;
        }

        public async Task<GroupViewModel> Update(int id, GroupViewModel update)
        {
            var group = await _db.Groups.FindAsync(id);
            if (update.Name != null) group.Name = update.Name;
            if (update.Description != null) { group.Description = update.Description; }
            group.Active = update.Active;
            if (update.Population != null) { var y = await AddPopulationToGroup(update.Population, group.Id); }
            if (update.Roles != null) { await AddRolesToGroup(update.Roles, group.Id); }
            group.ModifiedBy = update.ModifiedBy;

            /*foreach (var popId in update.Population)
            {
                group.Populations.Add(new Population{Id=popId});
            }
            foreach (var roleId in update.Roles)
            {
                group.Roles.Add(new Role { Id = roleId });
            }*/
            var changes = await _db.SaveChangesAsync();

            var vm = Mapper.Map<Group, GroupViewModel>(group);

            return vm;
        }

        private async Task<int> AddPopulationToGroup(List<int> PopulationId, int GroupId)
        {
            var population = _db.Populations.Where(a => PopulationId.Any(x => x == a.Id)).ToList();
            var grp = _db.Groups.Where(g => g.Id == GroupId).Include(p => p.Populations).FirstOrDefault();
            //population.ForEach(grp.Populations.Add);
            grp.Populations = population;
            var changes = await _db.SaveChangesAsync();
            Mapper.CreateMap<Group, CreateGroupViewModel>().ReverseMap();
            GroupViewModel groupVm = Mapper.Map<GroupViewModel>(grp);
            return changes > 0 ? 1 : 0;

        }

        private async Task<int> AddRolesToGroup(List<int> RolesId, int GroupId)
        {
            var role = _db.Roles.Where(a => RolesId.Any(x => x == a.Id)).ToList();
            var grp = _db.Groups.Where(g => g.Id == GroupId).Include(r => r.Roles).FirstOrDefault();
            //role.ForEach(grp.Roles.Add);
            grp.Roles = role;

            var changes = await _db.SaveChangesAsync();

            Mapper.CreateMap<Group, CreateGroupViewModel>().ReverseMap();
            GroupViewModel groupVm = Mapper.Map<GroupViewModel>(grp);

            return changes > 0 ? 1 : 0;

        }

        //get one group
        public async Task<GroupViewModel> Get(int id)
        {

            var groups = await _db.Groups.FindAsync(id);
            var vm = Mapper.Map<Group, GroupViewModel>(groups);
            return vm;
        } 
        public async Task<GroupViewModel> Create(GroupViewModel  group)
        {

            var g = _db.Groups.Create();
            g.Name = group.Name;
            g.Active = true;
            List<Role> RolesId = new List<Role>();
            var id = _appInfo.InstanceId;
            if (group.Description != null) { g.Description = group.Description; }
            if (group.Roles != null) { RolesId = _db.Roles.Where(a => group.Roles.Any(x => x == a.Id)).ToList(); }
            g.Roles = RolesId;
            g.ApplicationInstance = await _db.ApplicationInstances.Where(ai => ai.Id == group.InstanceId).FirstOrDefaultAsync();
            g.ModifiedBy = group.ModifiedBy;


            _db.Groups.Add(g);
            await _db.SaveChangesAsync();
            
            var vm = Mapper.Map<Group, GroupViewModel>(g);
            return vm;
        }
        public async Task<bool> Remove(int id)
        {
            var group = await _db.Groups.FindAsync(id);
            group.Active = false;
            group.IsDeleted = true;
            var changes = await _db.SaveChangesAsync();
            return changes > 0 ? true : false;
        }


        public async Task<IEnumerable<GroupPopulationsViewModel>> GetGroupPopulations(int id, bool global = true)
        {

            var group = await _db.Groups.FirstOrDefaultAsync(g => g.Id == id);

            var popsQuery = _db.Populations.Where(p => p.ApplicationInstance == null).AsQueryable();
            if (!global)
            {
                popsQuery = popsQuery.Where(p => p.ApplicationInstance.Id == group.ApplicationInstance.Id).AsQueryable();
            }
            var pops = await popsQuery.ToListAsync();

            var vm = Mapper.Map<IEnumerable<Population>, IEnumerable<GroupPopulationsViewModel>>(pops);
            foreach (var populationsViewModel in vm)
            {
                populationsViewModel.Active = group.Populations.Any(p => p.Id == populationsViewModel.Id);
            }
            return vm;
        }

        public async Task<GroupPopulationsViewModel> AddPopulationToGroup(int popId, int id)
        {
            var group = await _db.Groups.FindAsync(id);
            var pop = await _db.Populations.FindAsync(popId);
            group.Populations.Add(pop);
            await _db.SaveChangesAsync();
            var vm = Mapper.Map<Population, GroupPopulationsViewModel>(pop);
            vm.Active = true;
            return vm;
        }

        public async Task<GroupPopulationsViewModel> RemovePopulationFromGroup(int popId, int id)
        {
            var group = await _db.Groups.FindAsync(id);
            var pop = await _db.Populations.FindAsync(popId);
            group.Populations.Remove(pop);
            await _db.SaveChangesAsync();
            var vm = Mapper.Map<Population, GroupPopulationsViewModel>(pop);
            vm.Active = false;
            return vm;
        }

        public void SetApplication(int appId)
        {
            _db.SetApplication(appId);
        }
    }
}