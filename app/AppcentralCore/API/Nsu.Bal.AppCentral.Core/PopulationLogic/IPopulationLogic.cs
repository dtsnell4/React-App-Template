using System.Collections.Generic;
using System.Threading.Tasks;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;

namespace Nsu.Bal.AppCentral.Core.PopulationLogic
{
    public interface IPopulationLogic : IFilterLogic
    {

        Task<List<PopulationViewModel>> GetAll(int instanceId, string[] roles, bool b);
        Task<PopulationViewModel> Get(int id);
    }
}
