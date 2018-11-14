using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Nsu.Data.Entity.Interfaces;


namespace Nsu.Dal.AppCentral.Core.Models
{
    [Table("Jobs", Schema = "AppCentral")]
    [Data.Entity.Attributes.SoftDelete("IsDeleted")]
    public class Job: IAuditable
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public string StoredProcedureName { get; set; }
        public string StoredProcedureParams { get; set; }
        public int  CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime DateModified { get; set; }
        public bool IsDeleted  { get; set; }
        public  bool  Active { get; set; }
        public virtual JobType JobType { get; set; }

    }
}
