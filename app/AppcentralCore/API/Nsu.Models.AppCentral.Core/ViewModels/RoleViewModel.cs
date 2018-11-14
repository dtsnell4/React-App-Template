using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class RoleViewModel
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public string Description { get; set; }
        public string Api { get; set; }
    }
}
