using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestApi.Models;


namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{
    private readonly TestContext _context;

    public TestController(TestContext context){
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Test>>> Get()
    {
        try
        {
            List<Test> testVariabel = await _context.Test.ToListAsync();
            return Ok(testVariabel);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Test>> Post([FromBody] Test test)
    {
        try
        {
            _context.Test.Add(test);
            await _context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = test.Id}, test);
        }
        catch
        {
            return StatusCode(500);
        }
    }
    
}
