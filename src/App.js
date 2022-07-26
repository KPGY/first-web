import React, { createContext, useContext } from 'react';
import { useState, useRef } from 'react';
import "./App.css";
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <h1>상점, 나만의 상점, 구매내역 구현예정</h1>
    </div>
  );
}


export default App;