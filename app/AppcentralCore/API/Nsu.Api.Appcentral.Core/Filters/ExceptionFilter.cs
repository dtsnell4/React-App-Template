using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Http.Filters;
using System.Web.Http.ModelBinding;
using AutoMapper;

namespace Nsu.Api.AppCentral.Core.Filters
{
    public class ExceptionFilter : ExceptionFilterAttribute
    {
        private ModelStateDictionary _modelState;
        public override void OnException(HttpActionExecutedContext context)
        {
            var ex = context.Exception;
            _modelState = context.ActionContext.ModelState;

            if (ex.InnerException != null && ex is DbUpdateException)
            {
                var inner = ex.InnerException.InnerException as SqlException;
                if (inner != null)
                {
                    SqlException(inner);
                }
            }
            if (!_modelState.IsValid)
            {
                context.Response = context.Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest, _modelState);
            }
            else
            {
                context.Response = context.Request.CreateErrorResponse(
                    HttpStatusCode.InternalServerError, ex);
            }

        }

        private void SqlException(SqlException ex)
        {
            var unique = new Regex(
                @"Cannot insert duplicate key row in object '(?<table>.*)' with unique index 'IX_(?<index>.*)'\. The duplicate key value is \((?<value>.*)\)");

            if (ex.Number == 2601)
            {
                var m = unique.Match(ex.Message);

                if (m.Success)
                {
                    _modelState.AddModelError(m.Groups["index"].Value, "unique");

                }
            }

        }
    }
}
