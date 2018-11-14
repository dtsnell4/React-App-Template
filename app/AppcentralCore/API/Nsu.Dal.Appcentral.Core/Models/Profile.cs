using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Nsu.Data.Entity.Interfaces;

namespace Nsu.Dal.AppCentral.Core.Models
{
    [Table("Profiles", Schema = "AppCentral")]
    public class Profile :IAuditable
    {
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public  int UserId { get; set; }
        public virtual User User { get; set; }
        [MaxLength(150)]
        public string FirstName { get; set; }
        [MaxLength(110)]
        public string MiddleInitial { get; set; }
        [MaxLength(150)]
        public string LastName { get; set; }
        [MaxLength(150)]
        public string Email { get; set; }
        //public string AddressLine1 { get; set; }
        //public string? AddressLine2 { get; set; }
        //public string? AddressLine3 { get; set; }
        //public string AddressCity { get; set; }
        //public string AddressState { get; set; }
        //public string AddressZip { get; set; }
        [MaxLength(150)]
        public string PhoneNumber { get; set; }
        public DateTime LastLoggedIn { get; set; }
        [MaxLength(9)]
        public string NSU { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifiedBy { get; set; }

    

    }
}
