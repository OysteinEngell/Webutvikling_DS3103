import React, { useEffect } from 'react'
import BurgerListItem from './BurgerListItem'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
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
    <div className='p-3 ' style={{height: '100vh'}}>

        <Button onClick={newBurger} variant="primary" size='lg' className='w-100 mb-3'>Legg til ny burger</Button>

        <div style={{ height: '85vh', overflowY: 'auto', overflowX: 'hidden', paddingBottom: '100px'}}>
            {searchResult.map((burger, id)=> (
                <BurgerListItem burger={burger} setEditMode={setEditMode} key={id} />
            ))}
        </div>

    </div>
  )
}

export default BurgerList
