namespace Nsu.Dal.AppCentral.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "AppCentral.BannerCache",
                c => new
                    {
                        UserId = c.Int(nullable: false),
                        Id = c.Int(nullable: false),
                        FirstName = c.String(),
                        MiddleInitial = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        PhoneNumber = c.String(),
                        LastLoggedIn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("AppCentral.Users", t => t.UserId)
                .Index(t => t.UserId);
            
            CreateTable(
                "AppCentral.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(maxLength: 50),
                        BannerPidm = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("AppCentral.BannerCache", "UserId", "AppCentral.Users");
            DropIndex("AppCentral.BannerCache", new[] { "UserId" });
            DropTable("AppCentral.Users");
            DropTable("AppCentral.BannerCache");
        }
    }
}
