import React, { useEffect, useState } from 'react'
import IBurger from '../Interfaces/IBurger'
import BurgerListItem from '../components/BurgerListItem'
import { Button, Card, Col, Row } from 'react-bootstrap'

const ShoppingCartPage: React.FC = () => {

    const [localBurgers, setLocalBurgers] = useState<IBurger[]>([])
    const [totalPrice, setTotalPrice] = useState(0);

    const getLocalStorage = () => {
        const getLocalBurgers = localStorage.getItem("cart")
        if(getLocalBurgers){
            setLocalBurgers(JSON.parse(getLocalBurgers) as IBurger[])


           
        }
    }

    const checkout = () => {
        localStorage.setItem("cart", "")
        setLocalBurgers([])
    }

    const getTotalPrice = () => {
        const total = localBurgers.reduce((acc, burger) => acc + burger.price, 0 )
        setTotalPrice(total)
    }

    useEffect(() => {
        getLocalStorage()
    }, [])

    useEffect(() => {
        getTotalPrice()
    }, [localBurgers])

  return (
    <div className='bg-black text-light p-3' style={{height: '100lvh'}}>
        <Row xs={1} lg={2}>
            <Col className='mb-3'>
                <h2>Checkout</h2>
                <Button variant="outline-warning" onClick={checkout}>Purchase {totalPrice}kr</Button>
            </Col>
            <Col>
            <h2>Your order:</h2>
                {localBurgers.map((burger, id) => (
                <Card bg='dark' text='white' key={id} className='mb-3'>
                    <Row>
                        <Col>
                            <Card.Img src={`https://localhost:7130/images/burgers/${burger.image}`} style={{height: '100px', objectFit: 'cover'}}></Card.Img>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{burger.name}</Card.Title>
                                <Card.Text>{burger.price}kr</Card.Text>
                            </Card.Body>
                        
                        </Col>
                    </Row>
                </Card>
                ))}
            </Col>
            
        </Row>
      
    </div>
  )
}

export default ShoppingCartPage
