import { useState } from "react";
import axios from "axios";
import { Input, Button, Form } from "antd";
import { Link, Redirect } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(user);
    const { data } = await axios.post("http://localhost:3065/user/login", user);
    // console.log(data);
    if (data) {
      localStorage.setItem("id", data.id);
      setSuccess(true);
    }
  };
  if (success) return <Redirect to="/" />;

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      <h2>로그인</h2>
      <Form onFinish={handleSubmit}>
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
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
