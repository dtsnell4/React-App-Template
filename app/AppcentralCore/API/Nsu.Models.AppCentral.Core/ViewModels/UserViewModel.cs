using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int BannerPidm { get; set; }
        public int UserId { get; set; }
        //public virtual List<PopulationViewModel> Popultions { get; set; }
    }
}
