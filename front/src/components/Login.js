import { useState } from "react";
import axios from "axios";
import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialUser);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    axios.post("/user/login", user);
  };

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <Input
            name="email"
            type="text"
            required
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <Input
            name="password"
            type="password"
            required
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <Button type="submit">로그인</Button>
      </Form>
    </div>
  );
};

export default Login;
