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
            List<Burger> result = await context.Burgers.ToListAsync();
            return Ok(result);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Burger>> Get(int id)
    {
        try
        {
            Burger? result = await context.Burgers.FindAsync(id);
            if(result != null){
                return Ok(result);
            }else{
                return StatusCode(404);
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("search/{name}")]
    public async Task<ActionResult<List<Burger>>> Get(string name)
    {
        try
        {
            string searchNameLower = name.ToLower();

            List<Burger> result = await context.Burgers.Where(b => b.Name.ToLower().Contains(searchNameLower)).ToListAsync();
            return Ok(result);
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

    [HttpPost("burgerList")]
    public async Task<ActionResult<List<Burger>>> Post([FromBody] List<Burger> burgerList)
    {
        try
        {
            foreach(Burger burger in burgerList){
                context.Burgers.Add(burger);
            }

            await context.SaveChangesAsync();
            return StatusCode(200);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<ActionResult<Burger>> Put(Burger burger)
    {
        try
        {
            context.Entry(burger).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return StatusCode(200);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete]
    public async Task<ActionResult<Burger>> Delete(int id)
    {
        try
        {
            Burger? burger = await context.Burgers.FindAsync(id);

            if(burger != null){
                context.Burgers.Remove(burger);
                await context.SaveChangesAsync();
                return StatusCode(200);

            }else{
                return StatusCode(500);
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }



    
}
