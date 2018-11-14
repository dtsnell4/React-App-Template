using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class UserProfileViewModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string MiddleInitial { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime LastLoggedIn { get; set; }
        public string UserName { get; set; }
        public string NSU { get; set; }
        public int BannerPidm { get; set; }
    }
}
