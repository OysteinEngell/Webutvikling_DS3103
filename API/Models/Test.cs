using System.ComponentModel.DataAnnotations;

namespace TestApi.Models;

public class Test{
    [Key]
    public int Id {get; set;}
    public string? Name {get; set;}
}
