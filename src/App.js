import React, { createContext, useContext } from 'react';
import "./App.css";
import Container from '@mui/material/Container';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router , Link, Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='main'>             
          <Container>
          <Header />
          </Container>
        <Routes>
          <Route path='/' element={<Container><Home/></Container>} />
        </Routes>

        <Routes>
          <Route path='/checkout' element={<Container><Checkout/></Container>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;