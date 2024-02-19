import React, { useState } from 'react'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import { Col, Row, Toast, ToastContainer } from 'react-bootstrap'
import BurgerCard from '../components/BurgerCard'

const MenuPage: React.FC = () => {

const burgerContext = useBurgerContext()

const [toastPresented, setToastPresented] = useState(false)

const toggleToast = () => {
    setToastPresented(!toastPresented)
}
  return (
    <div className='p-3 bg-black' style={{height: '95vh'}}>
        <ToastContainer position='top-end'>
            <Toast show={toastPresented} onClose={toggleToast} className='bg-warning text-bold' >
                <Toast.Header className='bg-warning'><strong>Burger has been added to your cart!</strong></Toast.Header>
            </Toast>
        </ToastContainer>
            <Row xs={1} md={2} lg={3} style={{height: '90vh', overflowY: 'auto'}}>
          
                {burgerContext.allBurgers.map((burger, id) => (
                    <Col key={id}>
                        <BurgerCard burger={burger} toggleToast={toggleToast} />
                    </Col>
                ))}
            </Row>
        </div>
  )
}

export default MenuPage
