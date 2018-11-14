using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Nsu.Data.Entity.Interfaces;
namespace Nsu.Dal.AppCentral.Core.Models
{
    [Table("Roles", Schema = "AppCentral")]
    public class Role : IAuditable
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required, MaxLength(100)]
        [Index("IX_Role_Name_Application", 1, IsUnique = true)]
        public String Name { get; set; }

        [MaxLength(1000, ErrorMessage = "No more than 1000 characters")]
        public string Description { get; set; }
        public virtual ICollection<Group> Groups { get; set; }
        
        [Index("IX_Role_Name_Application", 2, IsUnique = true)]
        public virtual Application Application { get; set; }

        public int CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }
    }
}
