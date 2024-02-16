namespace BurgerApi.Interfaces;

interface IBurger
{
    int? Id {get; set;}
    string Name {get; set;}
    string Description {get; set;}
    int Price {get; set;}
    string image {get; set;}


}