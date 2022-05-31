using Microsoft.EntityFrameworkCore;
using CandidateInformationAPI.Models;
namespace CandidateInformationAPI.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<CandidateInformation> CandidateInformations { get; set; }

    }
}
