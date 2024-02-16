import React from 'react'
import {Button} from 'react-bootstrap'
import BurgerApiService from '../services/BurgerApiService'

const TestComponent: React.FC = () => {

  const handleClick = async() => {
    const allTest = await BurgerApiService.getAllBurgers()
  }

  return (
    <div>
      <Button variant='secondary' onClick={handleClick}>Component</Button>
      

    </div>


  )
}

export default TestComponent
