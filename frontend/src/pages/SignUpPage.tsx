import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../types/User';

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
	const [user, setUser] = useState<User>({ name: '', email: '', password: '' });

	return (
		<Container>
			<h1>SignUp</h1>
			<InputContainer>
				<SignUpLabel>Name</SignUpLabel>
				<SignUpInput
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
			</InputContainer>
			<InputContainer>
				<SignUpLabel>ID</SignUpLabel>
				<SignUpInput
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
			</InputContainer>
			<InputContainer>
				<SignUpLabel>PW</SignUpLabel>
				<SignUpInput
					type="password"
					value={user.password}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
			</InputContainer>
			<SignUpButton>signup</SignUpButton>
		</Container>
	);
};

export default SignUpPage;
