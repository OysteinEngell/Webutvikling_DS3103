import React, { useState } from 'react'
import {Button, Card} from 'react-bootstrap'
import BurgerApiService from '../services/BurgerApiService'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import IBurger from '../Interfaces/IBurger'

const TestComponent: React.FC = () => {

  const burgerContext = useBurgerContext()

  const handleClick = async() => {
    const allburgers = await BurgerApiService.getAllBurgers()
    if(allburgers != undefined){
      burgerContext.updateAllBurgers(allburgers);
    }
    console.log(allburgers)
  }

  return (
    <div>
      <Button variant='secondary' onClick={handleClick}>Component</Button>
      
      <div>
      {burgerContext.allBurgers.map((burger: IBurger) => (
          <h1 key={burger.id}>{burger.name}</h1>
        ))}
      </div>
    </div>


  )
}

export default TestComponent
