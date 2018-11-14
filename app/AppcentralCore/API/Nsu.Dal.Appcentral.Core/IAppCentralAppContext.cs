using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nsu.Dal.AppCentral.Core.Models;

namespace Nsu.Dal.AppCentral.Core
{
    public interface IAppCentralAppContext : ICommonDbContext
    {
        int AppId { get; set; }
        DbSet<Application> Applications { get; set; }
        DbSet<ApplicationInstance> ApplicationInstances { get; set; }
        DbSet<Role> Roles { get; set; }
        DbSet<Group> Groups { get; set; }
        DbSet<Population> Populations { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Profile> Profiles { get; set; }
        DbSet<UploadedFile> Files { get; set; }
        DbSet<T> Set<T>() where T : class;

        void SetApplication(int appId);
        void SetApplicationInstance(int instanceId);
    }
}
