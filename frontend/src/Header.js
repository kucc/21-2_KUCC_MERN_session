import React, { useState } from "react";

export default function Header() {
  const [title, setTitle] = useState("Hello!");

  return <div>{title}</div>;
}
