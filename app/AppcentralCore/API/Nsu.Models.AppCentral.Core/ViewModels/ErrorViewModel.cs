using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class ErrorViewModel
    {
        public HttpStatusCode Status { get; set; }
        public string Message { get; set; }
    }
}
