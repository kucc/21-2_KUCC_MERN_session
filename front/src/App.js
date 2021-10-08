import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
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
