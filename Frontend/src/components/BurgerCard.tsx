import React from 'react'
import IBurger from '../Interfaces/IBurger'
import { Button, Card } from 'react-bootstrap'

type Props = {
    burger: IBurger
}

const BurgerCard: React.FC<Props> = ({burger}) => {

    const imagepath: string = "https://localhost:7130/images/burgers/"

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
        >Legg til i Handlekurv {burger.price}kr</Button>
    </Card.Body>
    </Card>

  )
}


export default BurgerCard
