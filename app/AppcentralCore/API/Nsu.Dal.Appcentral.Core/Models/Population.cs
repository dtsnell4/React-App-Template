using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using Nsu.Data.Entity.Interfaces;

namespace Nsu.Dal.AppCentral.Core.Models
{
    [Table("Populations", Schema = "AppCentral")]
    [Data.Entity.Attributes.SoftDelete("IsDeleted")]
    public class Population : IAuditable, ISoftDelete
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required, MaxLength(100)]
        [Index(IsUnique = true)]
        public String Name { get; set; }
        [Required]
        public bool Auto { get; set; }
        [MaxLength(1000)]
        public String Description { get; set; }
        public bool Active { get; set; }
        public virtual ICollection<Group> Groups { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }
        public bool IsDeleted { get; set; }
        public virtual ICollection<User> Users { get; set; }
        public virtual ApplicationInstance ApplicationInstance { get; set; }


        
    }
}
