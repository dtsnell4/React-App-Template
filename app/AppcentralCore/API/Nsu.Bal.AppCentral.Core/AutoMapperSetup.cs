using System.Linq;
using AutoMapper;
using Nsu.Dal.AppCentral.Core.Models;
using Nsu.Models.AppCentral.Core.ViewModels;

namespace Nsu.Bal.AppCentral.Core
{
    public static class AutoMapperSetupCore
    {
        public static void SetupAutoMapper()
        {



            Mapper.CreateMap<ApplicationInstance, AppInstanceViewModel>()
                .ForMember(d => d.ApplicationName, src => src.MapFrom(s => s.Application.Name))
                 .ForMember(d => d.ApplicationFolder, src => src.MapFrom(s => s.Application.FolderName))
                .ReverseMap();
            Mapper.CreateMap<Group, CreateGroupViewModel>().ReverseMap();
            Mapper.CreateMap<Role, RoleViewModel>().ReverseMap();
            
            //Mapper.CreateMap<Population, PopulationViewModel>().
                        //ForMember(dest=>dest.Users, opts=>opts.MapFrom(src=>src.Users.Select(u=>u.Id))).
               //ReverseMap();
            Mapper.CreateMap<CreateRoleViewModel, Role>().ReverseMap();
            Mapper.CreateMap<UserViewModel, User>().ReverseMap();
            Mapper.CreateMap<Group, GroupViewModel>()
                .ForMember(d => d.Roles, src => src.MapFrom(s => s.Roles.Select(r => r.Id)))
                .ForMember(d => d.Population, src => src.MapFrom(s => s.Populations.Select(r => r.Id)))
                .ForMember(d => d.ApplicationId, src => src.MapFrom(s => s.ApplicationInstance.Application.Id))
                .ForMember(d => d.InstanceId, src => src.MapFrom(s => s.ApplicationInstance.Id))
                .ForMember(d => d.ApplicationName, src => src.MapFrom(s => s.ApplicationInstance.Application.Name))
                .ForMember(d => d.InstanceName, src => src.MapFrom(s => s.ApplicationInstance.Name))
                .ReverseMap();
            Mapper.CreateMap<Nsu.Dal.AppCentral.Core.Models.Profile, UserProfileViewModel>()
                .ForMember(d=>d.UserName, o=>o.MapFrom(s=>s.User.UserName))
                .ReverseMap();
            //Mapper.CreateMap<Population, PopulationViewModel>().ReverseMap();
            Mapper.CreateMap<Population, PopulationViewModel>()
               .ForMember(p => p.ApplicationInstance, pp => pp.MapFrom(p => p.ApplicationInstance.Id))
               .ReverseMap();

            Mapper.CreateMap<Population, GroupPopulationsViewModel>()
                 .ForMember(d => d.ApplicationInstance, src => src.MapFrom(s => s.ApplicationInstance.Id)).
                ReverseMap();

        }
    }
}
