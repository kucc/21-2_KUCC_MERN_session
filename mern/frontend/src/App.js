import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {useState} from 'react';
import Input from './Input';

function App() {
  const state = {
    name: '선영',
    age: 22,
    hobby: '드럼 치기',
    major: 'DIS',
    contact: 'ynnus411@naver.com',
  };
  const [greeting, setGreeting] = useState("안녕하세요");
  // setGreeting에 실행되는 순간 리렌더링, 함수 다시 호출, setGreeting한 값을 greeting에 대입한 후 return문 렌더링
  const handleChange = event => setGreeting(event.target.value)
  return (
    <div className="App">
      <Header name={state.name} />
      <Body age={state.age} hobby={state.hobby} major={state.major} />
      <Footer contact={state.contact} />
      <Input
            value={greeting}
            onChange={handleChange}
        />
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
