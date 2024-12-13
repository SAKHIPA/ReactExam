using BookMgnt.Model;
using Microsoft.EntityFrameworkCore;


namespace BookMgnt.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Auther> Authers { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Category> Categorys { get; set; }
    }
}
