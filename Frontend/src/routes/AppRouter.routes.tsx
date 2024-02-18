import React from 'react'
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import MenuPage from '../pages/MenuPage'
import { Nav, Navbar } from 'react-bootstrap'



const AppRouter: React.FC = () => {


  return (
    <div>
      <BrowserRouter>
        <Navbar bg='dark' data-bs-theme="dark" expand="lg" className='p-3'>
          <Navbar.Brand href="/" style={{fontWeight: 'bolder', color: 'yellow'}}>The Golden Burger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Menu</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              <Nav.Link as={Link} to="https://localhost:7130/index.html">API docs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path='https://localhost:7130/index.html' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
