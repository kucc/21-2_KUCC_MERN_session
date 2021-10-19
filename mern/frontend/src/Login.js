import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    padding: 20px;
    border: 1px solid #eee;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const InnerContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
    margin-top: 5px;
    padding: 0px 20px;
`;

const Input = styled.input`
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    margin-top: -5px;
`;

const Button = styled.div`
    font-size: 18px;
    display: block;
    width: 100%;
    margin-top: 30px;
    padding: 13px;
    cursor: pointer;
    text-align: center;
    border: none;
    border-radius: 7px;
    background-color: #6b48ff;
    color: #fff;
    font-family: "Titillium Web", sans-serif;
    font-weight: bold;
`;

const Login = () => {
	const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

	return(
        <>
            <div class="Title">
                <h1>Log in</h1>
            </div>
            <div className="LoginBox">
                <Container>
                    <InnerContainer>
                        <div className="LoginComment">로그인 정보를 입력하세요.</div>
                    </InnerContainer>
                    <InnerContainer>
                        <Input value={id} placeholder="ID" onChange={onChangeId} />
                    </InnerContainer>
                    <InnerContainer>
                        <Input value={password} placeholder="비밀번호" onChange={onChangePassword} />
                    </InnerContainer>
                    <InnerContainer>
                        <Button>Log in</Button>
                    </InnerContainer>
                </Container>
            </div>
        </>
	);
};

export default Login;
