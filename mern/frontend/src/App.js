import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const state = {
    name: '체리🍒LOVER 선영><',
    age: 22,
    hobby: '드럼 치기',
    major: 'DIS',
    contact: 'ynnus411@naver.com',
  };

  return (
    <div className="App">
      <Header name={state.name} />
      <Body age={state.age} hobby={state.hobby} major={state.major} />
      <Footer contact={state.contact} />
    </div>
  );
}

export default App;
