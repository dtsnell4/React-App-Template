using System.IO;
using System.Threading.Tasks;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;

namespace Nsu.Bal.AppCentral.Core.FileLogic
{
    public interface IFileLogic
    {
        Task<FileViewModel> HandleFileUpload(string originalFileName, FileInfo uploadedFileInfo, int instanceId, int userId);
        void RemoveFile(int id, string path);
        Task<UploadedFile> GetFileServerName(int fileId);
    }
}