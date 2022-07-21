import React, { createContext, useContext } from 'react';
import { useState, useRef } from 'react';
import "./App.css";
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import Container from '@mui/material/Container';
import userEvent from '@testing-library/user-event';

function Article(){
  return <article>    
    <h2>Welcome</h2>
    이 페이지는 자유롭게 글을 올릴수 있는 게시판의 성질을 지닌 연습용 페이지 입니다, 자유롭게 사용하시고 피드백을 게시글로 남겨주세요.
    <br />
      <ButtonGroup>
    <Button variant='outlined'>글작성</Button>
    <Button variant='outlined'>수정</Button>
      </ButtonGroup>
    <Button variant='outlined' sx={{m:2}}>삭제</Button>
  </article>

}
function App() {
  return (
    <Container fixed>    
      <Article></Article>
      {Login()}
      {black()}
      <Counter />
    </Container>
  );
}
function Login() {
  return <div>
   <Button variant='contained' sx={{m:1}}>로그인</Button>
  </div>
}

function black() {
  return <div>
    <Button variant='contained' onClick={()=> {alert("구현예정!")}} sx={{m:1}}>darkmode</Button>
  </div>
}

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  const reset = () => {
    setNumber(0);
  }

  return (
  <div>
    <h1>{number}</h1>
    <ButtonGroup sx={{m:2}}>
    <Button variant='outlined' onClick={onIncrease}>+1</Button>
    <Button variant='outlined' onClick={onDecrease}>-1</Button>
    <Button variant='outlined' onClick={reset}>reset</Button>
    </ButtonGroup>
  </div>
  )
}

export default App;