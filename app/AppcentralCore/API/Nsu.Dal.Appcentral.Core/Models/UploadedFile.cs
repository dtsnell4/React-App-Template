using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nsu.Data.Entity.Attributes;
using Nsu.Data.Entity.Interfaces;

namespace Nsu.Dal.AppCentral.Core.Models
{
     [Table("Files", Schema = "AppCentral")]
     [SoftDelete("IsDeleted")]
    public class UploadedFile :IAuditable
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public String Name { get; set; }
        public String ServerName { get; set; }

        public int Size { get; set; }
        public string ContentType { get; set; }
        public bool Pending { get; set; }
        public virtual ApplicationInstance ApplicationInstance { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
