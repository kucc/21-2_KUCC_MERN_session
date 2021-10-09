import { Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("id"));
  const handleLogout = async () => {
    const { data } = await axios.post("http://3.38.117.172/user/logout");
    console.log(data);
    localStorage.removeItem("id");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <Header />
      <nav>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>로그아웃</Button>
        ) : (
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </ul>
        )}
      </nav>
      <Link to="/board"> 게시판 바로가기 </Link>
    </div>
  );
}

export default App;
