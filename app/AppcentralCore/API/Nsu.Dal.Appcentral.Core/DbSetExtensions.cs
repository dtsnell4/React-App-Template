using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Nsu.Dal.AppCentral.Core
{
    public static class DbSetExtensions
    {
        public static IQueryable<T> Including<T>(this IDbSet<T> set,
            params Expression<Func<T, object>>[] includeProperties)
            where T : class
        {
            return includeProperties.Aggregate<Expression<Func<T, object>>, IQueryable<T>>(set,
                (current, item) => current.Include(item));
        }

        //TODO: REMOVE ME
        public static IQueryable<TEntity> Unfiltered<TEntity>(this IDbSet<TEntity> set) where TEntity : class
        {
            return set;
        }
    }
}
