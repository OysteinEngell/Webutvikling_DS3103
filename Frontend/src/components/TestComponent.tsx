import React from 'react'
import {Button} from 'react-bootstrap'
import TestService from '../services/TestService'

const TestComponent: React.FC = () => {

  const handleClick = async() => {
    const allTest = await TestService.getAllTests()
  }

  return (
    <div>
      <Button variant='secondary' onClick={handleClick}>Component</Button>


    </div>


  )
}

export default TestComponent
