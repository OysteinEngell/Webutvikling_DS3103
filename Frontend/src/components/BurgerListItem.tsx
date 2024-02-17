import React from 'react'
import IBurger from '../Interfaces/IBurger'
import { Card } from 'react-bootstrap'
import { useBurgerContext } from '../contexts/BurgerContextProvider'


type Props = {
    burger: IBurger
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerListItem: React.FC<Props> = ({burger, setEditMode}) => {

    const {updateSelectedBurger} = useBurgerContext()

    const selectBurger = () => {
        updateSelectedBurger(burger)
        setEditMode(true)
    }

  return (
    <Card onClick={selectBurger}>
      <Card.Body>{burger.name}</Card.Body>

    </Card>
  )
}

export default BurgerListItem
