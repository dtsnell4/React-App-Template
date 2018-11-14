using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;

namespace Nsu.Bal.AppCentral.Core.UserLogic
{
    public interface IAppCentralUserLogic
    {
        System.Threading.Tasks.Task<Nsu.Models.AppCentral.Core.ViewModels.UserProfileViewModel> GetProfile(string username);
        Profile InsertProfile(Nsu.Bal.Banner.ViewModels.Person ProfileFromBanner);
        System.Threading.Tasks.Task<int> UpdateProfile(Nsu.Bal.Banner.ViewModels.Person ProfileFromBanner);

        Task<IEnumerable<UserProfileViewModel>> GetUserFromBanner(int populationId, string lastName = null, string username = null, string nsuid = null);
        Task<UserViewModel> GetUser(int pidm);
        Task<IEnumerable<UserProfileViewModel>> SearchUser(string term, bool banner, int id);

        Task Login(ClaimsIdentity identity);


        Task<IEnumerable<AppInstanceViewModel>> GetAppInstances(int id, bool unfiltered = false);
        Task<UserProfileViewModel> GetUserById(int id);
		Task<IEnumerable<UserProfileViewModel>> SearchUserByGroup(string term, string groupName);
        Task<IEnumerable<UserProfileViewModel>> SearchUserByRole(int instanceId, string search, string role);
    }
}
