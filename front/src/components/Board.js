import React from "react";
import { Link } from "react-router-dom";

function Board(props) {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      게시판 입니다.
    </div>
  );
}

export default Board;
