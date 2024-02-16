using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BurgerApi.Models;


namespace BurgerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class BurgerController : ControllerBase
{
    private readonly BurgerContext context;

    public BurgerController(BurgerContext _context){
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Burger>>> Get()
    {
        try
        {
            List<Burger> testVariabel = await context.Burgers.ToListAsync();
            return Ok(testVariabel);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Burger>> Post([FromBody] Burger burger)
    {
        try
        {
            context.Burgers.Add(burger);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = burger.Id}, burger);
        }
        catch
        {
            return StatusCode(500);
        }
    }
    
}
