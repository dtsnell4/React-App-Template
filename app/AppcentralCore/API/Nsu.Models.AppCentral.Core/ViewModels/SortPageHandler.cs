using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Models.AppCentral.Core.ViewModels
{
    public class SortHandlerViewModel<T>
    {
        public IEnumerable<T> PagedResultSet { get; set; }
        public int TotalrecordCount { get; set; }       
    }
}
