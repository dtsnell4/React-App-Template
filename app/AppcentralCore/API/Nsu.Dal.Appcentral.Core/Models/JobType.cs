using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace Nsu.Dal.AppCentral.Core.Models
{

    [Table("JobTypes", Schema = "AppCentral")]
    [Data.Entity.Attributes.SoftDelete("IsDeleted")]
    public class JobType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public  int Id { get; set; }
        public string  Name { get; set; }
        public string Description { get; set; }
        public bool IsSSIS { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatedBy { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime DateModified { get; set; }
    }
}
