using Microsoft.AspNetCore.Mvc;

namespace BurgerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UploadImageController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;

    public UploadImageController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpPost]
    [Route("burger")]
    public async Task<ActionResult> SaveImage(IFormFile file)
    {
        try
        {
            string wwwrootPath = hosting.WebRootPath;
            string absolutePath = Path.Combine($"{wwwrootPath}/images/burgers/{file.FileName}");
        
            using(var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    
    }

}