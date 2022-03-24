using API.Entitites; // Need this to grab the products.
using Microsoft.EntityFrameworkCore; //Need this to use the DbContext Class

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}