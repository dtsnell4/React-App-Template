using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace Nsu.Api.AppCentral.Core
{

    /// <summary>
    /// 
    /// </summary>
    public class ApiAuthorizeAttribute : AuthorizeAttribute
    {
        protected override void HandleUnauthorizedRequest(HttpActionContext ctx)
        {
            if (!ctx.RequestContext.Principal.Identity.IsAuthenticated)
            {
                var owinCtx = ctx.Request.GetOwinContext();
                var jtiError = owinCtx.Get<bool>("jti_expired");
                if (jtiError)
                {
                    ctx.Response = ctx.ControllerContext.Request.CreateErrorResponse(HttpStatusCode.Forbidden,
                        "Token is not valid");
                }
                else
                {
                    base.HandleUnauthorizedRequest(ctx);
                }
            }
            else
            {
                ctx.Response = ctx.ControllerContext.Request.CreateErrorResponse(HttpStatusCode.Forbidden,
                    "User does not have access to this resource. Expected any of: " + Roles);
            }
        }
    }
}