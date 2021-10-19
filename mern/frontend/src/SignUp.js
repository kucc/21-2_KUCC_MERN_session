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


const Label = styled.label`
    margin: 1px;
    color: #0d3f67;
    font-family: "Titillium Web", sans-serif;
    font-weight: bold;
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


const SignUp = () => {
    const [name, setName] = useState('');
	const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };


    return(
        <>
            <div class="Title">
                <h1>Sign up</h1>
            </div>
            <div className="SignupBox">
                <Container>
                    <InnerContainer>
                        <Label>Name</Label>
                    </InnerContainer>
                    <InnerContainer>
                        <Input value={name} placeholder="이름" onChange={onChangeName} />
                    </InnerContainer>
                    <InnerContainer>
                        <Label>ID</Label>
                    </InnerContainer>
                    <InnerContainer>
                        <Input value={id} placeholder="ID" onChange={onChangeId} />
                    </InnerContainer>
                    <InnerContainer>
                        <Label>Password</Label>
                    </InnerContainer>
                    <InnerContainer>
                        <Input value={password} placeholder="비밀번호" onChange={onChangePassword} />
                    </InnerContainer>
                    <InnerContainer>
                        <Button>Submit</Button>
                    </InnerContainer>
                </Container>
            </div>
        </>
    );
};

export default SignUp;