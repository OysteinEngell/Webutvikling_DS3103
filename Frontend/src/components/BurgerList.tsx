import React from 'react'
import BurgerListItem from './BurgerListItem'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import { Button } from 'react-bootstrap'
import IBurger from '../Interfaces/IBurger'

type Props = {
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerList: React.FC<Props> = ({setEditMode}) => {

    const {searchResult, updateSelectedBurger} = useBurgerContext() 

    const newBurger = () => {
        const newBurger: IBurger = {
            id: null,
            name: '',
            description: '',
            price: 0,
            image: ''
        }
        updateSelectedBurger(newBurger)
        setEditMode(true)
    }


  return (
    <div className='p-3'>
        <p>Lag ny burger eller velg en burger fra listen for å oppdatere eller slette</p>
        <Button onClick={newBurger} variant="primary" size='lg' className='w-100 mb-3'>Legg til ny burger</Button>
        {searchResult.map((burger, id)=> (
            <BurgerListItem burger={burger} setEditMode={setEditMode} key={id} />
        ))}

    </div>
  )
}

export default BurgerList
