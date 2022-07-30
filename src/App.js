import React, { createContext, useContext } from 'react';
import { useState, useRef } from 'react';
import "./App.css";
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './Header';
import Home from './Home'
import { containerClasses } from '@mui/system';

function App() {
  return (
    <div className='main'>
      <Container>
      <Header />
      <Home />
      </Container>
    </div>
  );
}


export default App;