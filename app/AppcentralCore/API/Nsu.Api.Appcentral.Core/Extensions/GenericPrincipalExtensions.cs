using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using NSU.Utilities.Extensions;

namespace Nsu.Api.AppCentral.Core.Extensions
{
    /// <summary>
    /// 
    /// </summary>
    public static class GenericPrincipalExtensions
    {
        /// <summary>
        /// Gets Userid from identity
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns></returns>
        public static int UserId(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return 0;
            var claimsIdentity = user.Identity as ClaimsIdentity;
            if (claimsIdentity != null)
            {
                var userId = claimsIdentity.FindFirst("user_id");
                if (userId != null)
                    return userId.Value.ToInteger();
            }
            return 0;
        }

        /// <summary>
        /// Gets NSU ID from identity
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns></returns>
        public static string Nsuid(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return "";
            var claimsIdentity = user.Identity as ClaimsIdentity;
            return claimsIdentity != null ? claimsIdentity.FindFirst("NSUID").Value : "";
        }


        public static string EncryptedNsuid(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return "";
            var claimsIdentity = user.Identity as ClaimsIdentity;
            return claimsIdentity != null ? claimsIdentity.FindFirst("EncryptedNSU").Value : "";
        }

        public static List<string> Roles(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return new List<string>();
            var claimsIdentity = user.Identity as ClaimsIdentity;
            return claimsIdentity != null ? claimsIdentity.FindAll("http://schemas.microsoft.com/ws/2008/06/identity/claims/role").Select(x => x.Value).ToList() : new List<string>();
        }

        public static string ABC(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return "";
            var claimsIdentity = user.Identity as ClaimsIdentity;
            return claimsIdentity != null ? claimsIdentity.FindFirst("ABC").Value.Decrypt("rijndaelEncryptionKey".SystemConfiguration(), "rijndaelEncriptionVector".SystemConfiguration()) : "";
        }


        public static string Email(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return "";
            var claimsIdentity = user.Identity as ClaimsIdentity;
            return claimsIdentity != null ? claimsIdentity.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress").Value : "";
        }


        public static string UserName(this IPrincipal user)
        {
            if (!user.Identity.IsAuthenticated) return "";
            var claimsIdentity = user.Identity as ClaimsIdentity;
            return claimsIdentity != null ? claimsIdentity.FindFirst("UserName").Value : "";
        }
    }
}
