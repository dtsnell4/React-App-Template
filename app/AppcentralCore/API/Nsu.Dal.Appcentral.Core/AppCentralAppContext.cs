using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Linq;



namespace Nsu.Dal.AppCentral.Core
{
    
    public abstract class AppCentralAppContext : Data.Entity.Contexts.DatabaseContext
    {

        protected AppCentralAppContext(string connectionString, string schema)
            : base(connectionString,schema)
        {
        }       
    }
}
