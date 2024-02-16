#nullable disable
using Microsoft.EntityFrameworkCore;
using BurgerApi.Models;

namespace BurgerApi.Models;

public class BurgerContext : DbContext{
    public BurgerContext(DbContextOptions<BurgerContext> options):base(options){}
    public DbSet<Burger> Burgers {get; set;}
}

