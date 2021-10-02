import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Body from './Body';
import Footer from './Footer';

function App() {
  const state = {
    name : "정인아",
    age : 21,
    major : "디자인조형학부",
    hobby : "유화, 술 도장깨기, 컨버스 신발 모으기, 마라탕 맛집 탐방 그리고 가장 중요한 채린언니 덕질하기",
    contact : "010-6397-4608"
  }

  return (
    <div className="App">
      <Header/>
      <Body name={state.name} age={state.age} major={state.major} hobby={state.hobby}/>
      <Footer contact={state.contact}/>
    </div>
  )
}

export default App;
