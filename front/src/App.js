import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

function App() {
  const state = {
    name: "강태웅",
    age: 22,
    hobby: "춤추기, 더보이즈, 노래듣기, 보석십자수",
    contact: "mail: sag06078@naver.com, phone: 010-8628-8084",
  };
  const [greeting, setGreeting] = useState("안녕");
  const handleChange = (event) => setGreeting(event.target.value); //이렇게 함수를 빼서 사용가능

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
