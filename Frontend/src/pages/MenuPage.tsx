import React from 'react'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import { Card, Col, Row } from 'react-bootstrap'
import BurgerCard from '../components/BurgerCard'

const MenuPage: React.FC = () => {

const burgerContext = useBurgerContext()


  return (
    <div className='p-3 bg-black' style={{height: '95vh'}}>
            <Row xs={1} md={2} lg={3} style={{height: '90vh', overflowY: 'auto'}}>
          
                {burgerContext.allBurgers.map((burger, id) => (
                    <Col key={id}>
                        <BurgerCard burger={burger} />
                    </Col>
                ))}
            </Row>
        </div>
  )
}

export default MenuPage
