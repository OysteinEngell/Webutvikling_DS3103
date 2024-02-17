import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import TestComponent from './components/TestComponent';
import { BurgerContextProvider } from './contexts/BurgerContextProvider';
import AdminPage from './pages/AdminPage';
import AppRouter from './routes/AppRouter.routes';

function App() {
  return (
    <BurgerContextProvider>
      <div className="App">
        <AppRouter/>
      </div>
    </BurgerContextProvider>
  );
}

export default App;
