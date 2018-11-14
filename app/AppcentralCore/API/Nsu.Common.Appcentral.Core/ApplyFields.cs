using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Reflection;

namespace Nsu.Common.AppCentral.Core
{
    public static class Helpers
    {
        public static object ApplyFields(object item, List<string> lstOfFields)
        {
            if (!lstOfFields.Any())
            {
                return item;
            }
            else
            {
                var objectToReturn = new ExpandoObject();
                foreach (var field in lstOfFields)
                {
                    var fieldValue = item.GetType()
                         .GetProperty(field, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance)
                         .GetValue(item, null);

                    ((IDictionary<string, object>)objectToReturn).Add(field, fieldValue);
                }

                return objectToReturn;
            }
        }
    }
}
