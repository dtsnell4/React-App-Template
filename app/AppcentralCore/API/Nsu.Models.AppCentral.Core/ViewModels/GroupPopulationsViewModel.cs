using System;
using System.ComponentModel.DataAnnotations;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class GroupPopulationsViewModel
    {
        public int Id { get; set; }
        public String Name { get; set; }
        [Required]
        public bool Auto { get; set; }
        [MaxLength(1000)]
        public String Description { get; set; }

        public bool Active { get; set; }

        public int ApplicationInstance { get; set; }
    }
}
