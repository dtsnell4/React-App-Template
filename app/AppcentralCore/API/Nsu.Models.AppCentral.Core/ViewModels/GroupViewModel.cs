using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class GroupViewModel
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage = "No more than 50 characters")]
        public string Name { get; set; }
        public int ApplictionId { get; set; }
        [Required]
        [MaxLength(1000, ErrorMessage = "No more than 1000 characters")]
        public string Description { get; set; }

        public List<int> Population { get; set; }
       

        public List<int> Roles { get; set; }

        public bool Active { get; set; }

        public int ApplicationId { get; set; }
        public int InstanceId { get; set; }
        public string ApplicationName { get; set; }

        public string InstanceName { get; set; }

        public int ModifiedBy { get; set; }
        public DateTime DateModified { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
