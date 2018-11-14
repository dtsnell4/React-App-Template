using System.Collections.Generic;
using System.Threading.Tasks;
using Nsu.Models.AppCentral.Core.ViewModels;

namespace Nsu.Bal.AppCentral.Core.RoleLogic
{
    public interface IRoleLogic: IFilterLogic
    {
        Task<RoleViewModel> Add(int appId, CreateRoleViewModel createRole);

        Task<RoleViewModel> Add(int appId, string name, string description, int ModifiedBy);

        Task<RoleViewModel> Update(int appId, int roleId, CreateRoleViewModel createRole);
        Task<bool> AddToGroup(int roleId, int groupId);
        Task<IEnumerable<RoleViewModel>> GetAllByApp(int appId);
        Task<bool> RemoveFromGroup(int roleId, int groupId);
        Task<IEnumerable<RoleViewModel>> GetUserRolesbyAppId(int userId, int instanceId, int appId);
        Task<IEnumerable<RoleViewModel>> GetUserRolesbyAppId(string username, int instanceId,int appId);
        Task<RoleViewModel> Get(int appId, int id);
        Task<IEnumerable<RoleViewModel>> GetByUserAndApp(string username);
        Task<bool> Remove(int appId, int id);
        Task<IEnumerable<RoleViewModel>> GetUserRoles(int instanceId, int id);
        IEnumerable<RoleViewModel> GetUserRolesbyAppIdNotAsync(int userId, int instanceId);
    }
}
