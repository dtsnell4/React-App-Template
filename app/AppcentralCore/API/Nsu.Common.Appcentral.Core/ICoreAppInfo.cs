using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Common.AppCentral.Core
{
    public interface ICoreAppInfo
    {
        string Name { get; set; }
        string Description { get; set; }
        string Url { get; set; }
        string Version { get; set; }
        int InstanceId { get; set; }

        int AppId { get; set; }
    }
}
