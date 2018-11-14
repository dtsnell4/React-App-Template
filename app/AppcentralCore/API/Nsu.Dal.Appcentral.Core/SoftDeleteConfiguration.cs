using Nsu.Dal.AppCentral.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Dal.AppCentral.Core
{
    public class SoftDeleteConfiguration : DbConfiguration
    {
        public SoftDeleteConfiguration()
        {
            AddInterceptor(new SoftDeleteInterceptor());
        }


    }
}
