#nullable disable
using Microsoft.EntityFrameworkCore;
using TestApi.Models;

namespace TestApi.Models;

public class TestContext : DbContext{
    public TestContext(DbContextOptions<TestContext> options):base(options){}
    public DbSet<TestApi.Models.Test> Test {get; set;}
}

