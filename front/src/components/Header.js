import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link style={{ textDecoration: "none" }} to="/">
      <h1>CHERRY'S HOUSE</h1>
    </Link>
  );
}

export default Header;
