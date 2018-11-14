using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class AppInstanceViewModel
    {
        public bool Active { get; set; }
        public int Code { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        [MaxLength(1000, ErrorMessage = "No more than 1000 characters")]
        public string Description { get; set; }
        public int Id { get; set; }
        public int InstanceOwnerId { get; set; }
        public string Slug { get; set; }
        public string ApplicationFolder { get; set; }

        public string  ApplicationName { get; set; }
        public int ModifiedBy { get; set; }
        [MaxLength(50, ErrorMessage = "No more than 50 characters")]
        public string Name { get; set; }
    }
}
