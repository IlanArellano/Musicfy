using Microsoft.EntityFrameworkCore;
using Entities.Entities;

namespace ADO
{
    public class musicfyContext : DbContext
    {
        public musicfyContext(DbContextOptions<musicfyContext> options) : base(options)
        {

        }

        public DbSet<Artist> Artists { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Artist>().ToTable("artist");
            modelBuilder.Entity<User>().ToTable("users");
        }
    }
}