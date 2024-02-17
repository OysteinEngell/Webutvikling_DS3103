import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import MenuPage from '../pages/MenuPage'
import { Nav, Navbar } from 'react-bootstrap'



const AppRouter: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">The Golden Burger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Menu</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
