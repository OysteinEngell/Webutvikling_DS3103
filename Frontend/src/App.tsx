import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eksamen
        </p>
        <Button variant='primary'>Click me!</Button>
        <TestComponent/>
      </header>
    </div>
  );
}

export default App;
