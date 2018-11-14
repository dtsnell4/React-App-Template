using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class PopulationViewModel
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage = "No more than 50 characters")]
        public String Name { get; set; }
        [Required]
        public bool Auto { get; set; }
        [MaxLength(1000, ErrorMessage = "No more than 1000 characters")]
        public String Description { get; set; }
        public bool Active { get; set; }
        public int ApplicationInstance { get; set; }
        //public AppInstanceViewModel appInst { get; set; }
        public List<UserViewModel> Users { get; set; }
    }
    public class UpdatePopulationViewModel
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage = "No more than 50 characters")]
        public String Name { get; set; }
        [MaxLength(1000, ErrorMessage = "No more than 1000 characters")]
        public String Description { get; set; }
        public bool Active { get; set; }
    }
}
