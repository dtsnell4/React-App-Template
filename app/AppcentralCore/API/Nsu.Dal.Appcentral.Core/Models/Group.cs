using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Nsu.Data.Entity.Attributes;
using Nsu.Data.Entity.Interfaces;


namespace Nsu.Dal.AppCentral.Core.Models
{
    [Table("Groups", Schema = "AppCentral")]
    [SoftDelete("IsDeleted")]
    public class Group : IAuditable
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required, MaxLength(50)]
        public String Name { get; set; }
        public virtual ICollection<Population> Populations { get; set; }
        public virtual ICollection<Role> Roles { get; set; }
        public virtual ApplicationInstance ApplicationInstance { get; set; } 
        public bool Active { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }
        public bool IsDeleted { get; set; }
        [MaxLength(1000)]
        public string Description { get; set; }

    }
}
