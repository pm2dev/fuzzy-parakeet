import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'> 
        <NavbarBrand href='/'>
          <img src={NucampLogo} alt='nucamp logo' />
        </NavbarBrand>
      </Navbar>
      I'm Ready for Workshop!
    </div>
  );
}

export default App;
