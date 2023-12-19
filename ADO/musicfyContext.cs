using Microsoft.EntityFrameworkCore;

namespace ADO
{
    public class musicfyContext : DbContext
    {
        public musicfyContext(DbContextOptions<musicfyContext> options) : base(options)
        {

        }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
       => options.UseSqlServer($"Data Source=(local)");
    }
}