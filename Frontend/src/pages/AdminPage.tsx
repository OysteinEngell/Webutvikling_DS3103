import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SearchComponent from '../components/SearchComponent'
import BurgerList from '../components/BurgerList'
import { useBurgerContext } from '../contexts/BurgerContextProvider'
import BurgerApiService from '../services/BurgerApiService'
import { Row, Col, Toast, ToastContainer } from 'react-bootstrap'

const AdminPage: React.FC = () => {

  const [editMode, setEditMode] = useState(false)
  const {selectedBurger, updateAllBurgers} = useBurgerContext()
  const [toastPresented, setToastPresented] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

const toggleToast = () => {
    setToastPresented(!toastPresented)
}


  

  return (
    <div className='bg-black' style={{height: '100vh', paddingLeft: '5vw', paddingRight: '5vw'}}>

          <ToastContainer position='top-end'>
            <Toast show={toastPresented} onClose={toggleToast} className='bg-warning text-bold' >
                <Toast.Header className='bg-warning'><strong>{toastMessage}</strong></Toast.Header>
            </Toast>
        </ToastContainer> 

      <Row xs={1} lg={2}>
        <Col>
          <SearchComponent/>
        </Col>
        <Col>
          {editMode ?  <InputForm burger={selectedBurger} setEditMode={setEditMode} toggleToast={toggleToast} setToastMessage={setToastMessage}/> : <BurgerList setEditMode={setEditMode}/>}
        </Col>
      </Row>

    </div>
  )
}

export default AdminPage
