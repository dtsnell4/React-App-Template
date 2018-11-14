using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Metadata;
using System.Web.Http.Validation;

namespace Nsu.Api.AppCentral.Core
{
    public class PrefixlessBodyModelValidator : IBodyModelValidator
    {
        private readonly IBodyModelValidator _innerValidator;

        public PrefixlessBodyModelValidator(IBodyModelValidator innerValidator)
        {
            if (innerValidator == null)
            {
                throw new ArgumentNullException("innerValidator");
            }

            _innerValidator = innerValidator;
        }


        public bool Validate(object model, Type type, ModelMetadataProvider metadataProvider, HttpActionContext actionContext,
            string keyPrefix)
        {
            return _innerValidator.Validate(model, type, metadataProvider, actionContext, String.Empty);

        }
    }
}
