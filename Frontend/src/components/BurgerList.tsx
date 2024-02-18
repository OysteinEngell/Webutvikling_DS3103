import React, { useEffect } from 'react'
import BurgerListItem from './BurgerListItem'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import { Button, ListGroup } from 'react-bootstrap'
import IBurger from '../Interfaces/IBurger'

type Props = {
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerList: React.FC<Props> = ({setEditMode}) => {

    const {searchResult, updateSelectedBurger, allBurgers} = useBurgerContext() 


    const newBurger = () => {
        const newBurger: IBurger = {
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
        <Button onClick={newBurger} variant="primary" size='lg' className='w-100 mb-3'>Legg til ny burger</Button>
        <div style={{height: '70vh', overflowY: 'auto' }}>
            {searchResult.map((burger, id)=> (
                <BurgerListItem burger={burger} setEditMode={setEditMode} key={id} />
            ))}
        </div>

    </div>
  )
}

export default BurgerList
