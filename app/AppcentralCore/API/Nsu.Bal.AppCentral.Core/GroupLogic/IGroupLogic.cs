using System.Collections.Generic;
using System.Threading.Tasks;
using Nsu.Models.AppCentral.Core.ViewModels;

namespace Nsu.Bal.AppCentral.Core.GroupLogic
{
    public interface IGroupLogic: IFilterLogic
    {
        //get all groups for instance
        Task<IEnumerable<GroupViewModel>> GetAll(int inId);
        Task<GroupViewModel> Add(CreateGroupViewModel create);
        Task<GroupViewModel> Add(string name);
        Task<GroupViewModel> Update(int id, GroupViewModel update);
        Task<GroupViewModel> Get(int id);
        Task<bool> Remove(int id);
        Task<GroupViewModel> Create(GroupViewModel group);
        Task<IEnumerable<GroupPopulationsViewModel>> GetGroupPopulations(int id, bool global);
        Task<GroupPopulationsViewModel> AddPopulationToGroup(int popId, int id);
        Task<GroupPopulationsViewModel> RemovePopulationFromGroup(int popId, int id);
    } 
}
