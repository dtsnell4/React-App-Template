using System.ComponentModel.DataAnnotations.Schema;
using Nsu.Data.Entity.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Nsu.Dal.AppCentral.Core.Models
{
    [Table("ApplicationInstances", Schema = "AppCentral")]
    [Data.Entity.Attributes.SoftDelete("IsDeleted")]
    public class ApplicationInstance : IAuditable, ISoftDelete
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(50,ErrorMessage="No more than 50 characters")]
        public string Name { get; set; }
        [MaxLength(1000,ErrorMessage="No more than 1000 characters")]
        public string Description { get; set; }
        public int Code { get; set; }
        [MaxLength(20), MinLength(3), RegularExpression("^([a-z]+)(-?)([a-z]+)$"), Required, Index("IX_Slug_Application_Id", 0, IsUnique = true)]
        public string Slug { get; set; }
        //public int InstanceOwnerId { get; set; }
        public virtual ICollection<Group> Groups { get; set; }
        public virtual ICollection<UploadedFile> Files { get; set; }

        [Index("IX_Slug_Application_Id", 1, IsUnique = true)]
        public virtual Application Application { get; set; }
        public bool Active{get;set;}
        public int CreatedBy{get;set;}
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
