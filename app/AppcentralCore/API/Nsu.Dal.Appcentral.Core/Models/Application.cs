
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nsu.Data.Entity.Interfaces;
namespace Nsu.Dal.AppCentral.Core.Models
{

    [Table("Applications", Schema = "AppCentral")]
    [Data.Entity.Attributes.SoftDelete("IsDeleted")]
    public class Application: Nsu.Data.Entity.Interfaces.ISoftDelete,IAuditable
    {
        //App should have name (50), Desc (1000), 
        // folder name (20, no spaces, dashes ok), active (bool), 
        //version (1.0.0), Created(date), modified(date)
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(50)]
        [Required]
        [Index]
        public string Name { get; set; }

        [MaxLength(1000)]
        [Required]
        public string Description { get; set; }

        [MaxLength(20)]
        [RegularExpression(@"^[a-z-]*$")]
        [Required]
        [Index(IsUnique = true)]
        public string FolderName { get; set; }


        [Required]
        public bool Active { get; set; }

        [RegularExpression(@"^\d*.\d*.\d*-?[a-z]*$")]
        [Required]
        [MaxLength(20)]
        public string Version { get; set; }

    

        public virtual ICollection<ApplicationInstance> Instances { get; set; }
        public virtual ICollection<Role> Roles { get; set; }
        public bool IsDeleted { get; set; }

        public int CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }

    }
}
