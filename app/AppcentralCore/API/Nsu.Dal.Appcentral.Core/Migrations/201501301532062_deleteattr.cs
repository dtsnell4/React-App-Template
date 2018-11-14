namespace Nsu.Dal.AppCentral.Core.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class deleteattr : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "AppCentral.ApplicationInstance",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 50),
                        Description = c.String(maxLength: 1000),
                        Code = c.Int(nullable: false),
                        InstanceOwnerId = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                        CreatedBy = c.String(),
                        DateCreated = c.DateTime(nullable: false),
                        DateModified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        Application_Id = c.Int(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("AppCentral.Application", t => t.Application_Id)
                .Index(t => t.Application_Id);
            
            CreateTable(
                "AppCentral.Application",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Description = c.String(nullable: false, maxLength: 1000),
                        FolderName = c.String(nullable: false, maxLength: 20),
                        Active = c.Boolean(nullable: false),
                        Version = c.String(nullable: false, maxLength: 20),
                        Created = c.DateTime(nullable: false),
                        Modified = c.DateTime(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name);
            
            CreateTable(
                "AppCentral.Role",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        Description = c.String(maxLength: 1000),
                        Application_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("AppCentral.Application", t => t.Application_Id)
                .Index(t => t.Application_Id);
            
            CreateTable(
                "AppCentral.Group",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Active = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        DateModified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        ApplicationInstance_Id = c.Int(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("AppCentral.ApplicationInstance", t => t.ApplicationInstance_Id)
                .Index(t => t.ApplicationInstance_Id);
            
            CreateTable(
                "AppCentral.Population",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        Auto = c.Boolean(nullable: false),
                        Description = c.String(maxLength: 1000),
                        Active = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        DateModified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PopulationGroups",
                c => new
                    {
                        groupId = c.Int(nullable: false),
                        populationId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.groupId, t.populationId })
                .ForeignKey("AppCentral.Group", t => t.groupId, cascadeDelete: true)
                .ForeignKey("AppCentral.Population", t => t.populationId, cascadeDelete: true)
                .Index(t => t.groupId)
                .Index(t => t.populationId);
            
            CreateTable(
                "dbo.GroupRoles",
                c => new
                    {
                        groupId = c.Int(nullable: false),
                        roleId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.groupId, t.roleId })
                .ForeignKey("AppCentral.Group", t => t.groupId, cascadeDelete: true)
                .ForeignKey("AppCentral.Role", t => t.roleId, cascadeDelete: true)
                .Index(t => t.groupId)
                .Index(t => t.roleId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.GroupRoles", "roleId", "AppCentral.Role");
            DropForeignKey("dbo.GroupRoles", "groupId", "AppCentral.Group");
            DropForeignKey("dbo.PopulationGroups", "populationId", "AppCentral.Population");
            DropForeignKey("dbo.PopulationGroups", "groupId", "AppCentral.Group");
            DropForeignKey("AppCentral.Group", "ApplicationInstance_Id", "AppCentral.ApplicationInstance");
            DropForeignKey("AppCentral.Role", "Application_Id", "AppCentral.Application");
            DropForeignKey("AppCentral.ApplicationInstance", "Application_Id", "AppCentral.Application");
            DropIndex("dbo.GroupRoles", new[] { "roleId" });
            DropIndex("dbo.GroupRoles", new[] { "groupId" });
            DropIndex("dbo.PopulationGroups", new[] { "populationId" });
            DropIndex("dbo.PopulationGroups", new[] { "groupId" });
            DropIndex("AppCentral.Group", new[] { "ApplicationInstance_Id" });
            DropIndex("AppCentral.Role", new[] { "Application_Id" });
            DropIndex("AppCentral.Application", new[] { "Name" });
            DropIndex("AppCentral.ApplicationInstance", new[] { "Application_Id" });
            DropTable("dbo.GroupRoles");
            DropTable("dbo.PopulationGroups");
            DropTable("AppCentral.Population",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                });
            DropTable("AppCentral.Group",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                });
            DropTable("AppCentral.Role");
            DropTable("AppCentral.Application",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                });
            DropTable("AppCentral.ApplicationInstance",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "SoftDeleteColumnName", "IsDeleted" },
                });
        }
    }
}
