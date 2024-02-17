import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import MenuPage from '../pages/MenuPage'



const AppRouter: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Meny</Link></li>
                <li><Link to="admin">Administrer Burgere</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element= {<MenuPage/>}></Route>
            <Route path='admin' element= {<AdminPage/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default AppRouter
