import React from 'react'
import IBurger from '../Interfaces/IBurger'
import { Button, Card } from 'react-bootstrap'

type Props = {
    burger: IBurger
    toggleToast: () => void
}

const BurgerCard: React.FC<Props> = ({burger, toggleToast}) => {

    const imagepath: string = "https://localhost:7130/images/burgers/"

    const addToCart = () => {
      const storedBurgers = localStorage.getItem("cart")
      if(storedBurgers == null){
        localStorage.setItem("cart", "")
      }else if(storedBurgers == ""){
        localStorage.setItem("cart", JSON.stringify([burger]))
      }else{
        const newBurgerArray = JSON.parse(storedBurgers) as IBurger[]
        newBurgerArray.push(burger)
        localStorage.setItem("cart", JSON.stringify(newBurgerArray))
        toggleToast()
      }

    }

  return (
    

        
    <Card className='mb-3' bg='dark' text='white'>
    <Card.Img 
      src={`${imagepath}${burger.image}`}
      className='img-fluid'
      style={{ height: '400px', objectFit: 'cover'}}
      ></Card.Img>
    
    <Card.Body >
      <Card.Title style={{textAlign: 'left', fontWeight: 'bolder',  color: 'yellow'}}>{burger.name}</Card.Title>
      <Card.Text
        style={{textAlign: 'left'}}
      >{burger.description}</Card.Text>
      <Button 
        variant='outline-warning'
        className='w-100'
        onClick={addToCart}
        >Legg til i Handlekurv {burger.price}kr</Button>
    </Card.Body>
    </Card>

  )
}


export default BurgerCard
