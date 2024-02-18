import React from 'react'
import IBurger from '../Interfaces/IBurger'
import { Button, Card } from 'react-bootstrap'

type Props = {
    burger: IBurger
}

const BurgerCard: React.FC<Props> = ({burger}) => {

    const imagepath: string = "https://localhost:7130/images/burgers/"

  return (
    
    <div>
        
    <Card>
    <Card.Img src={`${imagepath}${burger.image}`}></Card.Img>
    <Card.Title>{burger.name} {burger.price}kr</Card.Title>
    <Card.Body>{burger.description}</Card.Body>
    <Button variant='primary'>Legg til i Handlekurv</Button>
    </Card>
    </div>
  )
}

export default BurgerCard
