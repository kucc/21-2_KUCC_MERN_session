import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	margin: 1rem auto;
	padding: 1rem;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px gray;
	text-align: center;
`;

const InputContainer = styled.div`
	display: flex;
	width: 60%;
	justify-content: space-between;
	margin-top: 1rem;
`;

const SignUpLabel = styled.label`
	margin: 0.5rem;
	text-align: center;
	font-weight: bold;
`;

const SignUpInput = styled.input`
	padding: 0.5rem;
	display: block;
	width: 70%;
	box-sizing: border-box;
	border: 1px solid black;
	outline: none;
	font: inherit;
	background: #fff;
`;

const SignUpButton = styled.button`
	margin: 1rem 0;
	padding: 5px;
	width: 20%;
	font: inherit;
	border: 1px solid #fa923f;
	background-color: #fff;
	color: #fa923f;
	cursor: pointer;
	:hover,
	active {
		color: white;
		background-color: #fa923f;
	}
`;

const SignUpPage = () => {
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container>
			<h1>SignUp</h1>
			<InputContainer>
				<SignUpLabel>Name</SignUpLabel>
				<SignUpInput value={name} onChange={(e) => setName(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<SignUpLabel>ID</SignUpLabel>
				<SignUpInput value={id} onChange={(e) => setId(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<SignUpLabel>PW</SignUpLabel>
				<SignUpInput value={password} onChange={(e) => setPassword(e.target.value)} />
			</InputContainer>
			<SignUpButton>signup</SignUpButton>
		</Container>
	);
};

export default SignUpPage;
