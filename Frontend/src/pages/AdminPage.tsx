import React, { useState } from 'react'
import InputForm from '../components/InputForm'
import SearchComponent from '../components/SearchComponent'
import BurgerList from '../components/BurgerList'
import { useBurgerContext } from '../contexts/BurgerContextProvider'

const AdminPage: React.FC = () => {

  const [editMode, setEditMode] = useState(false)
  const {selectedBurger} = useBurgerContext()
  

  return (
    <div>

        <SearchComponent/>
        {editMode ?  <InputForm burger={selectedBurger}/> : <BurgerList setEditMode={setEditMode}/>}

    </div>
  )
}

export default AdminPage
