using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class HelpViewModel
    {
        public int Id { get; set; }
        public String Content { get; set; }
        public AppInstanceViewModel ApplicationInstance { get; set; }
        public ICollection<FileViewModel> Files { get; set; }
    }
}
