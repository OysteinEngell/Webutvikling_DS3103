using System.ComponentModel.DataAnnotations;
using BurgerApi.Interfaces;

namespace BurgerApi.Models;

public class Burger: IBurger{
    [Key]
    public int? Id {get; set;}
    public string Name {get; set;} = "";
    public string Description {get; set;} = "";
    public int Price {get; set;} 
    public string image {get; set;} = "";

    public static implicit operator List<object>(Burger? v)
    {
        throw new NotImplementedException();
    }
}
