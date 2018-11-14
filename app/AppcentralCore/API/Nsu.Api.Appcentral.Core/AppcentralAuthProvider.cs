using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Rest;
using Nsu.AppCentral.Client;
using NSU.Utilities.Extensions;
using Owin;

namespace Nsu.Api.AppCentral.Core
{
    public static class AppCentralConfig
    {

        /// <summary>
        /// Init Appcentral Auth Provider
        /// </summary>
        public static void ConfigureAuth(IAppBuilder app)
        {
            var url = new Uri("AppCentralApi".SystemConfiguration() + "/");
            var token = "apiKey".SystemConfiguration();
            var api = new AppCentralApiv1(url) { Credentials = new TokenCredentials(token) };

            var issuer = "JWTissuer".SystemConfiguration();
            var audiences = new[] { "appcentral", "fse", "apisite" };

            var secret = TextEncodings.Base64Url.Decode("JWTKey".SystemConfiguration());

            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    AllowedAudiences = audiences,
                    IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
                    {
                        new SymmetricKeyIssuerSecurityTokenProvider(issuer, secret)
                    },
                    Provider = new OAuthBearerAuthenticationProvider
                    {
                        OnValidateIdentity = context =>
                        {

                            var instanceId = 0;

                            //try and get instance id from URL

                            var path = context.OwinContext.Request.Path.Value;
                            if (path != null)
                            {
                                const string search = "instances/";
                                var index = path.IndexOf(search, StringComparison.Ordinal);
                                if (index >= 0)
                                {
                                    var nextIndex = path.IndexOf("/", index + search.Length, StringComparison.Ordinal);
                                    instanceId =
                                        int.Parse(path.Substring(index + search.Length,
                                            nextIndex - index - search.Length));
                                }
                            }
                            if (context.Ticket.Identity.IsAuthenticated && instanceId != 0)
                            {
                                var userId =
                                    int.Parse(context.Ticket.Identity.Claims.First(c => c.Type == "user_id").Value);

                                var roles = api.Users.GetRoles(instanceId, userId);
                                foreach (
                                    var role in
                                        roles.Where(
                                            role => !context.Ticket.Identity.HasClaim(ClaimTypes.Role, role.Name)))
                                {
                                    context.Ticket.Identity.AddClaim(new Claim(ClaimTypes.Role, role.Name));
                                }
                            }
                            return Task.FromResult<object>(null);
                        }
                    }
                });

            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }

    }
}
