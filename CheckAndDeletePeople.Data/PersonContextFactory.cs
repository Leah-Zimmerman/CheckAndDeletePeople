
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CheckAndDeletePeople.Data
{
    public class PersonContextFactory : IDesignTimeDbContextFactory<PersonDbContext>
    {
        public PersonDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CheckAndDeletePeople.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PersonDbContext(config.GetConnectionString("ConStr"));
        }
    }
}