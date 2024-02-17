import React from 'react'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import { Card } from 'react-bootstrap'
import BurgerCard from '../components/BurgerCard'

const MenuPage: React.FC = () => {

const burgerContext = useBurgerContext()


  return (
    <div>
      {burgerContext.allBurgers.map((burger, id) => (
        <BurgerCard burger={burger} key={id}/>
      ))}
    </div>
  )
}

export default MenuPage
