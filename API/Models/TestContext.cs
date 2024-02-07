#nullable disable
using Microsoft.EntityFrameworkCore;
using Test.Models;

namespace TestApi.Models;

public class TestContext : DbContext{
    public TestContext(DbContextOptions<TestContext> options):base(options){}
    public DbSet<Test.Models.Test> Test {get; set;}
}

