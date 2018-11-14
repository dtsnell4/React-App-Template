using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using AutoMapper;
using Nsu.Common.AppCentral.Core;
using Nsu.Dal.AppCentral.Core;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;
using NSU.Utilities.Extensions;

namespace Nsu.Bal.AppCentral.Core.FileLogic
{
    public class FileLogic : IFileLogic
    {
         private readonly IAppCentralAppContext _db;
        private readonly ICoreAppInfo _appInfo;
        private readonly string _path;

        public FileLogic(IAppCentralAppContext db, ICoreAppInfo app)
        {
            _db = db;
            _appInfo = app;
            _path = "UploadPath".SystemConfiguration();
            if (_path.StartsWith("~/"))
            {
                _path = System.Web.Hosting.HostingEnvironment.MapPath(_path);
            }
        }
        public async Task<FileViewModel> HandleFileUpload(string originalFileName, FileInfo uploadedFileInfo, int instanceId, int userId)
        {
            var instance = await _db.ApplicationInstances.FindAsync(instanceId);
            if (instance == null) return null;
            if (uploadedFileInfo.Length <=0)
            {
                return null;
            }
            var guid = Guid.NewGuid();
            var fileExt = Path.GetExtension(originalFileName);

            var serverName = guid + fileExt;

            var fileDb = new UploadedFile
            {
                Name = originalFileName,
                ServerName = serverName,
                Size = (int) uploadedFileInfo.Length,
                ApplicationInstance = instance,
                DateCreated = DateTime.Now,
                DateModified = DateTime.Now,
                CreatedBy = userId,
                ModifiedBy = userId,
                IsDeleted = false,
                Pending = true
            };
            _db.Files.Add(fileDb);
            await _db.SaveChangesAsync();
            //save to disk
            var filePath = Path.Combine(string.Format("{0}{1}\\{2}", _path, instanceId, serverName));
            uploadedFileInfo.MoveTo(filePath);
            //return new id

            var vm = Mapper.Map<UploadedFile, FileViewModel>(fileDb);

            return vm;
        }

        public void RemoveFile(int id, string path)
        {
            var file = _db.Files.Find(id);
            var filePath = Path.Combine(path, file.ServerName);
            File.Delete(filePath);
            _db.Files.Remove(file);
            _db.SaveChanges();
        }
        public async void RemovePending()
        {
            var yesterday = DateTime.Now.AddDays(-1);
            var file = await _db.Files.Where(f => f.Pending && f.DateCreated < yesterday).ToListAsync();
            //var filePath = Path.Combine(path, file.ServerName);
            //File.Delete(filePath);
            //_db.Files.Remove(file);
            //_db.SaveChanges();
        }


        public async Task<UploadedFile> GetFileServerName(int fileId)
        {
            var file = await _db.Files.FindAsync(fileId);
            return file;
        }
    }
}
