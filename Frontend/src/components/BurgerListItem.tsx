import React from 'react'
import IBurger from '../Interfaces/IBurger'
import { Card, Col, Row } from 'react-bootstrap'
import { useBurgerContext } from '../contexts/BurgerContextProvider'


type Props = {
    burger: IBurger
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerListItem: React.FC<Props> = ({burger, setEditMode}) => {

    const {updateSelectedBurger} = useBurgerContext()
    const imagepath: string = "https://localhost:7130/images/burgers/"

    const selectBurger = () => {
        updateSelectedBurger(burger)
        setEditMode(true)
    }

  return (
    <Card onClick={selectBurger} className='mb-3' bg='dark' text='light'>
      <Row>
        <Col xs={4}>
          <Card.Img src={`${imagepath}${burger.image}`} className='img-fluid' style={{height: '100px', objectFit: 'cover'}}></Card.Img>
        
        </Col>
        <Col>
          <Card.Body>
            <Card.Title style={{textAlign: 'left'}}>
              {burger.name}
            </Card.Title>  
            <Card.Text>{burger.price}kr</Card.Text>
          </Card.Body>
        </Col>
      </Row>

    </Card>
  )
}

export default BurgerListItem
