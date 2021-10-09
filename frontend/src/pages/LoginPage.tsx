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
	box-shadow: 0 2px 3px #b1d0e6;
	text-align: center;
	background: #eaf0f5;
	h1 {
		color: #1d6495;
	}
`;

const LoginInput = styled.input`
	margin-top: 1rem;
	margin-inline: auto;
	padding: 0.5rem;
	display: block;
	width: 50%;
	box-sizing: border-box;
	border: 1px solid #1d6495;
	outline: none;
	font: inherit;
`;

const LoginButton = styled.button`
	margin: 1rem 0;
	padding: 0.5rem;
	width: 20%;
	font: inherit;
	border: 1px solid #1d6495;
	background-color: #fff;
	color: #1d6495;
	cursor: pointer;
	:hover,
	active {
		color: white;
		background-color: #1d6495;
	}
`;

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container>
			<h1>Login</h1>
			<h5>Please enter your email & password</h5>
			<LoginInput
				type="email"
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<LoginInput
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<LoginButton>login</LoginButton>
		</Container>
	);
};

export default LoginPage;
