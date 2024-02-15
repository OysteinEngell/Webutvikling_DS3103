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
    
}
