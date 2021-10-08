import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("id"));
  const handleLogout = async () => {
    const { data } = await axios.post("http://localhost:3065/user/logout", {
      credentials: "include",
    });
    console.log(data);
    localStorage.removeItem("id");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      <nav>
        <ul>
          <li>
            {isLoggedIn ? (
              <Button onClick={handleLogout}>로그아웃</Button>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      </nav>
      <Link to="/board"> 게시판 바로가기 </Link>
    </div>
  );
}

export default App;
