import { useState } from "react";
import axios from "axios";
import { Input, Checkbox, Button, Modal, Form } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorMessage = styled.div`
  color: red;
`;
const Font = styled.span`
  color: red;
  font-weight: bold;
`;

const initialUser = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [user, setUser] = useState(initialUser);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (user.password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    axios.post("/user/signup", user);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== user.password);
    // 비밀번호와 비밀번호 확인이 일치하는지 확인한다.
    // 둘이 일치하지 않으면 passwordError가 true가 되고
    // 둘이 일치하면 passwordError가 false가 된다.
    // 따라서 passwordError가 true가 되면 에러를 표시해주면 된다.
  };

  const onChangeTerm = (e) => {
    setTerm(e.target.checked);
    setTermError(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setTerm(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>HOME</h1>
      </Link>
      <h2>회원가입</h2>
      <Form onFinish={handleSubmit}>
        <div>
          <label>이름</label>
          <Input
            name="name"
            type="text"
            required
            onChange={handleChange}
            value={user.name}
          />
        </div>
        <div>
          <label>아이디</label>
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
        <div>
          <label>비밀번호 확인</label>
          <Input
            name="passwordCheck"
            type="password"
            required
            onChange={onChangePasswordCheck}
            value={passwordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div style={{ marginTop: "15px" }}>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm} />
          <Font onClick={showModal}>약관을 확인하려면 눌러주세요</Font>
          <Modal
            title="약관 내용"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="동의"
            cancelText="닫기"
          >
            <p>강태웅과 사이좋게 지낸다!</p>
            <p>강태웅과 자주 연락한다!</p>
            <p>강태웅과 자주 놀아준다!</p>
            <p>강태웅에게 밥을 자주 사준다!</p>
          </Modal>
          {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
        </div>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
