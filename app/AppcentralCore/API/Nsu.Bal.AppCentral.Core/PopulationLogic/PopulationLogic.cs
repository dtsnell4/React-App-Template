using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net.Sockets;
using System.Threading.Tasks;
using AutoMapper;
using Nsu.Common.AppCentral.Core;
using Nsu.Dal.AppCentral.Core;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;
using System.Collections;
using Nsu.Bal.Banner.Bal.Person;
using Nsu.Bal.AppCentral.Core.UserLogic;
using System.Data.Entity.Infrastructure;
using Nsu.Bal.AppCentral.Core.AppInfo;

//using System.Web.Script.Serialization;


namespace Nsu.Bal.AppCentral.Core.PopulationLogic
{
    public class PopulationLogic : IPopulationLogic
    {

        private readonly IAppCentralAppContext _ctx;
        private readonly ICoreAppInfo _appInfo;
        private readonly IPerson _banner;
        private readonly IAppCentralUserLogic _userlogic;

        public PopulationLogic(IAppCentralAppContext ctx, ICoreAppInfo app, IPerson banner, IAppCentralUserLogic userlogic)//, IAppInfoLogic appInfoLogic)
        {
            _ctx = ctx;
            _appInfo = app;
            _banner = banner;
            _userlogic = userlogic;
            //_appInfoLogic = appInfoLogic;
            //_appInfoLogic.FullInitialize(_appInfo);
            //_ctx.SetApplication(_appInfo.AppId);
        }

        public async Task<List<PopulationViewModel>> GetAll(int instanceId, string[] roles, bool global)
        {
            var query = _ctx.Populations.AsQueryable();
            if (roles!= null && roles.Any())
            {
                query =
                    query.Where(
                        p =>
                            p.Groups.Any(
                                g =>
                                    g.ApplicationInstance.Id == instanceId &&
                                    g.Roles.Any(r => roles.Contains(r.Name))));
            }
            if (global)
            {
                query = query.Where(p => p.ApplicationInstance == null);
            }
            var populations = await query.ToListAsync();
            var vm = Mapper.Map<List<Population>, List<PopulationViewModel>>(populations);

            return vm;

            //return await _db.Populations.Select(u => new PopulationViewModel
            //{
            //    Active = u.Active,
            //    Description = u.Description,
            //    Auto = u.Active,
            //    Name = u.Name,
            //    Id =
            //    Users = u.Users.Select(x => x.Id).ToList()
            //}).ToListAsync();
        }

        public async Task<PopulationViewModel> Get(int id)
        {
            return await _ctx.Populations.Where(p => p.Id == id).Include(g => g.Groups).Include(u => u.Users)
                .Select(x => new PopulationViewModel
                {
                    Active = x.Active,
                    Auto = x.Auto,
                    Description = x.Description,
                    Id = x.Id,
                    Name = x.Name,
                    ApplicationInstance = x.ApplicationInstance.Id
                    //Users = x.Users.Select(y => y.Id).ToList()
                }).FirstOrDefaultAsync();
        }
        public void SetApplication(int appId)
        {
            _ctx.SetApplication(appId);
        }
     
    }
}
