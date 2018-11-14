using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations.Model;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Dal.AppCentral.Core
{
    public class CreateFullTextIndexOperation : MigrationOperation
    {
        public CreateFullTextIndexOperation(object anonymousArguments = null)
            : base(anonymousArguments) { }

        public string Table { get; set; }
        public string Index { get; set; }
        public IEnumerable<string> Columns { get; set; }

        public override bool IsDestructiveChange
        {
            get { return false; }
        }
    }
}
