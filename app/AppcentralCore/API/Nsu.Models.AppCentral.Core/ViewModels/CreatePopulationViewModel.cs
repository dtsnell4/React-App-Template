using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class CreatePopulationViewModel
    {
        [Required]
        [MaxLength(50, ErrorMessage = "No more than 50 characters")]
        public String Name { get; set; }
        [MaxLength(1000, ErrorMessage = "No more than 1000 characters")]
        public String Description { get; set; }

        public bool Active { get; set; }

        public int ApplicationInstanceId { get; set; }

        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }
        public  DateTime DateCreated { get; set; }
        public int CreatedBy { get; set; }
    }
}
