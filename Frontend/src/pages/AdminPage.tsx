import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SearchComponent from '../components/SearchComponent'
import BurgerList from '../components/BurgerList'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import BurgerApiService from '../services/BurgerApiService'

const AdminPage: React.FC = () => {

  const [editMode, setEditMode] = useState(false)
  const {selectedBurger, updateAllBurgers} = useBurgerContext()
  

  

  return (
    <div>

        <SearchComponent/>
        {editMode ?  <InputForm burger={selectedBurger} setEditMode={setEditMode}/> : <BurgerList setEditMode={setEditMode}/>}

    </div>
  )
}

export default AdminPage
