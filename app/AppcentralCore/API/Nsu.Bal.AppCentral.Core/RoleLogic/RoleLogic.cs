using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Nsu.Common.AppCentral.Core;
using Nsu.Dal.AppCentral.Core;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;
using AutoMapper;
using Nsu.Bal.AppCentral.Core.AppInfo;

namespace Nsu.Bal.AppCentral.Core.RoleLogic
{
    public class RoleLogic : IRoleLogic
    {
        private readonly IAppCentralAppContext _ctx;

        private readonly ICoreAppInfo _appInfo;

        public RoleLogic(IAppCentralAppContext db, ICoreAppInfo app)//, IAppInfoLogic appInfoLogic)
        {
            _ctx = db;
            _appInfo = app;
            //_appInfoLogic = appInfoLogic;
            //_appInfoLogic.FullInitialize(_appInfo);
            //_ctx.SetApplication(_appInfo.AppId);
        }





        public async Task<RoleViewModel> Add(int appId, CreateRoleViewModel createRole)
        {
            return await Add(appId, createRole.Name, createRole.Description, createRole.ModifiedBy);
        }

        public async Task<RoleViewModel> Add(int appId, string name, string description, int modifiedBy)
        {
            var app = await _ctx.Applications.FindAsync(appId);
            if (app == null) return null;
            var role = new Role
            {
                Name = name,
                Description = description,
                Application = app,
                ModifiedBy = modifiedBy
            };

            _ctx.Roles.Add(role);
            await _ctx.SaveChangesAsync();
            var roleVm = Mapper.Map<Role, RoleViewModel>(role);
            return roleVm;

        }

        public async Task<bool> AddToGroup(int roleId, int groupId)
        {
            var group = await _ctx.Groups.FindAsync(groupId);
            var role = await _ctx.Roles.FindAsync(roleId);

            if (group!=null && role!= null && group.ApplicationInstance.Application.Id == role.Application.Id)
            {
                group.Roles.Add(role);
                var changes = await _ctx.SaveChangesAsync();
                return changes > 0;
            }

            return false;
        }

        public async Task<IEnumerable<RoleViewModel>> GetAllByApp(int appId)
        {
            var roles = await _ctx.Roles.Where(r => r.Application.Id == appId).ToListAsync();
            var rolesVm = Mapper.Map<IEnumerable<Role>, IEnumerable<RoleViewModel>>(roles);
            return rolesVm;
        }

        public async Task<bool> RemoveFromGroup(int roleId, int groupId)
        {
            var group = await _ctx.Groups.FindAsync(groupId);
            var role = await _ctx.Roles.FindAsync(roleId);

            if (group != null && role != null && group.ApplicationInstance.Application.Id == role.Application.Id)
            {
                group.Roles.Remove(role);
                var changes = await _ctx.SaveChangesAsync();
                return changes > 0;
            }

            return false;
        }

        public async Task<IEnumerable<RoleViewModel>> GetUserRolesbyAppId(int userId, int instanceId, int applId = 0)
        {

            var app = await _ctx.Applications.FirstOrDefaultAsync(a => a.Name == _appInfo.Name);
            if (app != null)
            {
                var appId = 0;
                //TODO: appId is application INSTANCE id not app id.
                if (instanceId>0)
                {
                    appId = instanceId;
                }
                else { appId = _appInfo.InstanceId; }
               
                //var roles = _ctx.Roles.Where(r => r.Groups.Select(
                //g => g.ApplicationInstance.Id == appId &&
                //    g.Populations.Select(
                //        p => p.Users.Select(u => u.Id == userId)
                //    ).Any()).Any());

                var roles = await _ctx.Roles.Where(r => r.Groups.Any(
                g => g.ApplicationInstance.Id == appId || appId == 0 &&
                    g.Populations.Any(
                        p => p.Users.Any(u => u.Id == userId)
                    ))).ToListAsync();

                //var roles1 = from r in _ctx.Roles
                //            from g in r.Groups
                //            from p in g.Populations
                //            from u in p.Users
                //            where u.Id == userId && r.Application.Id == appId
                //            select r;

                var rolesVm = Mapper.Map<IEnumerable<Role>, IEnumerable<RoleViewModel>>(roles);

                return rolesVm;
            }

            return null;
            
        }
        public async Task<IEnumerable<RoleViewModel>> GetUserRolesbyAppId(string username, int instanceid,int applId = 0)
        {


            var appId = applId;
            var instanceId = instanceid;
            //var roles = _ctx.Roles.Where(r => r.Groups.Select(
            //g => g.ApplicationInstance.Id == appId &&
            //    g.Populations.Select(
            //        p => p.Users.Select(u => u.Id == userId)
            //    ).Any()).Any());

            var roles = _ctx.Roles.Where(r => r.Groups.Any(
            g => g.ApplicationInstance.Id == instanceId &&
                g.Populations.Any(
                    p => p.Users.Any(u => u.UserName == username)
                )));

            //var roles1 = from r in _ctx.Roles
            //            from g in r.Groups
            //            from p in g.Populations
            //            from u in p.Users
            //            where u.Id == userId && r.Application.Id == appId
            //            select r;

            var rolesVm = Mapper.Map<IEnumerable<Role>, IEnumerable<RoleViewModel>>(roles);

            return rolesVm;
        }
        public async Task<IEnumerable<RoleViewModel>> GetByUserAndApp(string username)
        {

            var app = await _ctx.Applications.FirstOrDefaultAsync(a => a.Name == _appInfo.Name);
            if (app != null)
            {
                var appId = app.Id;
                var user = await _ctx.Users.FirstOrDefaultAsync(u => u.UserName == username);
                if (user != null)
                {
                    return await GetUserRolesbyAppId(user.Id, appId);
                }
            }

            return null;

        }
        public async Task<RoleViewModel> Get(int appId, int id)
        {
            var role = await _ctx.Roles.FindAsync(id);
            if (role.Application.Id != appId)
            {
                return null;
            }
            var roleVm = Mapper.Map<Role, RoleViewModel>(role);
            return roleVm;
        }





        public async Task<RoleViewModel> Update(int appId, int roleId, CreateRoleViewModel createRole)
        {
            var role = await _ctx.Roles.FindAsync(roleId);
            if (role.Application.Id != appId)
            {
                return null;
            }
            role.Name = createRole.Name;
            role.Description = createRole.Description;
            await _ctx.SaveChangesAsync();

            var roleVm = Mapper.Map<Role, RoleViewModel>(role);
            return roleVm;
        }


        public async Task<bool> Remove(int appId, int id)
        {
            var role = await _ctx.Roles.FindAsync(id);
            if (role.Application.Id != appId)
            {
                return false;
            }
            var r = _ctx.Roles.Remove(role);
            await _ctx.SaveChangesAsync();

            return true;
        }

        public async Task<IEnumerable<RoleViewModel>> GetUserRoles(int instanceId, int userId)
        {
            var roles = await _ctx.Roles.Where(r => r.Groups.Any(
            g => g.ApplicationInstance.Id == instanceId &&
                g.Populations.Any(
                    p => p.Users.Any(u => u.Id == userId)
                ))).ToListAsync();

            var rolesVm = Mapper.Map<IEnumerable<Role>, IEnumerable<RoleViewModel>>(roles);

            return rolesVm;
        }

        public void SetApplication(int appId)
        {
            _ctx.SetApplication(appId);
        }



        public IEnumerable<RoleViewModel> GetUserRolesbyAppIdNotAsync(int userId, int instanceId)
        {
            var roles = _ctx.Roles.Where(r => r.Groups.Any(
            g => g.ApplicationInstance.Id == instanceId &&
                g.Populations.Any(
                    p => p.Users.Any(u => u.Id == userId)
                ))).ToList();


            var rolesVm = Mapper.Map<IEnumerable<Role>, IEnumerable<RoleViewModel>>(roles);

            return rolesVm;
        }

    }
}