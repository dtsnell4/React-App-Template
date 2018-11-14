using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.UI.WebControls;
using Nsu.Models.AppCentral.Core.ViewModels;
using Nsu.Bal.Banner.Bal.Person;
using Nsu.Dal.AppCentral.Core;
using Nsu.Dal.AppCentral.Core.Models;
using AutoMapper;


using Person = Nsu.Bal.Banner.ViewModels.Person;
using System.Data.Entity.Core.Objects;
using System.Data.SqlClient;
using System.Security.Claims;

namespace Nsu.Bal.AppCentral.Core.UserLogic
{
    public class AppCentralUserLogic : IAppCentralUserLogic
    {
        private readonly IAppCentralAppContext _ctx;
        private readonly IPerson _profile;

        public AppCentralUserLogic(IAppCentralAppContext ctx, IPerson profile)
        {
            _ctx = ctx;
            _profile = profile;

        }
        public async Task<UserProfileViewModel> GetProfile(string username)
        {

            
                var profileAppCentral = GetProfileInfo(username);


                if (profileAppCentral == null)
                {
                    var profile = await Task.Run(() =>
                    {
                        return _profile.LoadPerson(username + "@nova.edu", Banner.Bal.Person.Person.SearchType.Email);
                    });

                    InsertProfile(profile);

                    return GetProfileInfo(username);

                }
                return profileAppCentral;
            


        }
        private UserProfileViewModel GetProfileInfo(string username)
        {
            var query = _ctx.Users.Where(user => user.UserName == username)
                .Join(_ctx.Profiles, user => user.Id, cache => cache.UserId, (user, cache) =>
                    new UserProfileViewModel
                    {
                        Email = cache.Email,
                        FirstName = cache.FirstName,
                        Id = cache.Id,
                        LastLoggedIn = cache.LastLoggedIn,
                        LastName = cache.LastName,
                        MiddleInitial = cache.MiddleInitial,
                        PhoneNumber = cache.PhoneNumber,
                        UserId = cache.UserId,
                        UserName = user.UserName
                    });
            return query.FirstOrDefault();
        }
        public Nsu.Dal.AppCentral.Core.Models.Profile InsertProfile(Person ProfileFromBanner)
        {

            string username = ProfileFromBanner.Email.Substring(0, ProfileFromBanner.Email.IndexOf('@'));

            var AppCentralUser = _ctx.Users.Where(x => x.UserName == username).Select(x => x.Id).FirstOrDefault();

            Nsu.Dal.AppCentral.Core.Models.Profile cache = new Nsu.Dal.AppCentral.Core.Models.Profile();

            cache.LastLoggedIn = DateTime.Now;
            cache.FirstName = ProfileFromBanner.Name;
            cache.Email = ProfileFromBanner.Email;
            cache.LastName = ProfileFromBanner.LastName;
            cache.MiddleInitial = ProfileFromBanner.MiddleInitial;
            cache.PhoneNumber = ProfileFromBanner.PhoneNumber;
            cache.UserId = AppCentralUser;
            cache.NSU = ProfileFromBanner.NSU;

            _ctx.Profiles.Add(cache);






            return _ctx.SaveChanges() > 0 ? cache : null;



        }
        public async Task<int> UpdateProfile(Person ProfileFromBanner)
        {

            string username = ProfileFromBanner.Email.Substring(0, ProfileFromBanner.Email.IndexOf('@'));

            var appCentralUser = _ctx.Users.FirstOrDefault(x => x.UserName == username);

            var cache = _ctx.Profiles.FirstOrDefault(x => x.UserId == appCentralUser.Id);

            cache.LastLoggedIn = DateTime.Now;
            cache.FirstName = ProfileFromBanner.Name;
            cache.Email = ProfileFromBanner.Email;
            cache.LastName = ProfileFromBanner.LastName;
            cache.MiddleInitial = ProfileFromBanner.MiddleInitial;
            cache.PhoneNumber = ProfileFromBanner.PhoneNumber;
            cache.UserId = appCentralUser.Id;

            return await _ctx.SaveChangesAsync();
        }
        public async Task<IEnumerable<UserProfileViewModel>> GetUserFromBanner(int populationId, string lastName = null, string username = null, string nsuid = null)
        {
            //var profiles = _ctx.Profiles.

            //TODO: use await Task.Run() for non blocking banner queries 
            IEnumerable<Nsu.Bal.Banner.ViewModels.Person> users = null;
            if (lastName != null && username == null && nsuid == null)
            {
                users = _profile.LoadPersonsByLastName(lastName);
            }
            else
                if (lastName != null && username != null && nsuid == null)
                {
                    var email = username;
                    users = _profile.LoadPersonsByLastName(lastName).Where(x => x.Email.StartsWith(email));
                }
                else
                    if (lastName != null && username == null)
                    {
                        users = _profile.LoadPersonsByLastName(lastName).Where(x => x.NSU.StartsWith(nsuid));
                    }
                    else
                        if (lastName == null && username != null && nsuid == null)
                        {
                            users = _profile.LoadPersons(username, Banner.Bal.Person.Person.SearchType.Email);
                        }
                        else
                            if (lastName == null && username == null && nsuid != null)
                            {
                                users = _profile.LoadPersons(nsuid, Banner.Bal.Person.Person.SearchType.NSU);
                            }
                            else
                                if (lastName == null && username != null)
                                {
                                    users = _profile.LoadPersons(username, Banner.Bal.Person.Person.SearchType.Email).Where(x => x.NSU == nsuid);
                                }

            //.Join(_ctx.Profiles, user => user.Id, cache => cache.UserId, (user, cache) =>
            //             new UserProfileViewModel
            //             {
            //var profiles1 = _ctx.Users.Where(u => pidms.Contains(u.BannerPidm)).Join(_ctx.Populations, pop => pop.Id, pp => pp.Id, (pop, pp) => new UserProfileViewModel
            //{
            //    Email = users.First(us => us.Pidm == u.BannerPidm).Email,
            //    FirstName = users.First(us => us.Pidm == u.BannerPidm).Name,
            //    LastName = users.First(us => us.Pidm == u.BannerPidm).LastName,
            //    MiddleInitial = users.First(us => us.Pidm == u.BannerPidm).MiddleInitial,
            //    UserName = u.UserName,
            //    UserId = u.Id
            //}).ToList();
            var pidms = users.Select(u => u.Pidm).ToList();
            var profiles = await _ctx.Users.Where(u => pidms.Contains(u.BannerPidm)).ToListAsync();

            return profiles.Select(u => new UserProfileViewModel
            {

                Email = users.First(us => us.Pidm == u.BannerPidm).Email,
                FirstName = users.First(us => us.Pidm == u.BannerPidm).Name,
                LastName = users.First(us => us.Pidm == u.BannerPidm).LastName,
                MiddleInitial = users.First(us => us.Pidm == u.BannerPidm).MiddleInitial,
                UserName = u.UserName,
                UserId = u.Id
            }).ToList();
        }
        public async Task<List<UserViewModel>> GetUser(List<int> pidms)
        {
            var user = await _ctx.Users.Where(x => pidms.IndexOf(x.BannerPidm) != -1).ToListAsync();
            List<UserViewModel> uservm = AutoMapper.Mapper.Map<List<User>, List<UserViewModel>>(user);
            return uservm;
        }
        public async Task<UserViewModel> GetUser(int pidm)
        {
            var user = _ctx.Users.Include(r => r.Populations).FirstOrDefault(x => x.BannerPidm == pidm);
            var uservm = new UserViewModel
            {
                Id = user.Id,
                BannerPidm = user.BannerPidm,
                UserName = user.UserName
            };
            return uservm;
        }

        public async Task<IEnumerable<UserProfileViewModel>> SearchUser(string term, bool banner, int populationId)
        {

            //var table = context.GetTableName(typeof(Profile));
            if (!banner)
            {

                List<SqlParameter> sqls = new List<SqlParameter>();
                sqls.Add(new SqlParameter("@value", term));
                sqls.Add(new SqlParameter("@population", populationId));

                var result = await _ctx.Profiles
                    .SqlQuery("AppCentral.sp_SearchUsers @value, @population", sqls.ToArray())
                    .ToListAsync();

                var usersVm =
                    AutoMapper.Mapper.Map<IEnumerable<Nsu.Dal.AppCentral.Core.Models.Profile>, IEnumerable<UserProfileViewModel>>(result);
                return usersVm.ToList();


            }

            var users = _profile.LoadPersons(term, Banner.Bal.Person.Person.SearchType.Generic);

            var pidms = users.Select(u => u.UserID).ToList();
            var profiles = _ctx.Users.Where(u => pidms.Contains(u.BannerPidm) && !u.Populations.Select(p => p.Id).Contains(populationId)).ToList();
            return profiles.Select(u => new UserProfileViewModel
            {

                Email = users.First(us => us.UserID == u.BannerPidm).Email,
                FirstName = users.First(us => us.UserID == u.BannerPidm).Name,
                LastName = users.First(us => us.UserID == u.BannerPidm).LastName,
                MiddleInitial = users.First(us => us.UserID == u.BannerPidm).MiddleInitial,
                NSU = users.First(us => us.UserID == u.BannerPidm).NSU,
                UserName = u.UserName,
                UserId = u.Id
            }).ToList();
        }

        public async Task Login(ClaimsIdentity identity)
        {
            var profile = await GetProfile(identity.Claims.First(c => c.Type == "sub").Value);
            identity.AddClaim(new Claim("user_id", profile.UserId.ToString()));

        }

        public async Task<IEnumerable<AppInstanceViewModel>> GetAppInstances(int id, bool unfiltered = false)
        {
            //User->populations->groups->instance

            var appinstances = await (unfiltered ? _ctx.ApplicationInstances.Unfiltered().Where(ai => ai.Groups.Any(g => g.Populations.Any(p => p.Users.Any(u => u.Id == id)))).ToListAsync() : _ctx.ApplicationInstances.Where(
                    ai => ai.Groups.Any(g => g.Populations.Any(p => p.Users.Any(u => u.Id == id)))).ToListAsync());
            var vm = Mapper.Map<IEnumerable<ApplicationInstance>, IEnumerable<AppInstanceViewModel>>(appinstances);
            return vm;
        }

        public async Task<UserProfileViewModel> GetUserById(int id)
        {
            
                var query = _ctx.Users.Where(user => user.Id == id)
                         .Join(_ctx.Profiles, user => user.Id, cache => cache.UserId, (user, cache) =>
                         new UserProfileViewModel
                         {
                             Email = cache.Email,
                             FirstName = cache.FirstName,
                             Id = cache.Id,
                             LastLoggedIn = cache.LastLoggedIn,
                             LastName = cache.LastName,
                             MiddleInitial = cache.MiddleInitial,
                             PhoneNumber = cache.PhoneNumber,
                             UserId = cache.UserId,
                             UserName = user.UserName
                         });
                return await query.FirstOrDefaultAsync();
            
        }
		
		public async Task<IEnumerable<UserProfileViewModel>> SearchUserByGroup(string term, string groupName)
        {
			List<SqlParameter> sqls = new List<SqlParameter>();
			sqls.Add(new SqlParameter("@value", term));
			sqls.Add(new SqlParameter("@group", groupName));

			var result = await _ctx.Profiles
				.SqlQuery("AppCentral.sp_SearchUsersByGroup @value, @group", sqls.ToArray())
				.ToListAsync();

			var usersVm =
				AutoMapper.Mapper.Map<IEnumerable<Nsu.Dal.AppCentral.Core.Models.Profile>, IEnumerable<UserProfileViewModel>>(result);
			return usersVm.ToList();
		}

        public async Task<IEnumerable<UserProfileViewModel>> SearchUserByRole(int instanceId, string search, string role)
        {
            var sqls = new List<SqlParameter> {
                new SqlParameter("@value", search), 
                new SqlParameter("@role", role),
                new SqlParameter("@instanceId",instanceId)
            };

            var result = await _ctx.Profiles
                   .SqlQuery("AppCentral.sp_SearchUsersByRole @value, @role, @instanceId", sqls.ToArray())
                   .ToListAsync();

            
            var usersVm =
                    Mapper.Map<IEnumerable<Dal.AppCentral.Core.Models.Profile>, IEnumerable<UserProfileViewModel>>(result);
            return usersVm.ToList();
        }
    }
}
