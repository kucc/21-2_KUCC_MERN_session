import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
	h1 {
		color: #1d6495;
	}
`;

const HomePage = () => {
	return (
		<Container>
			<h1>Home</h1>
			<Link to="/login">로그인</Link>
			<Link to="/signup">회원가입</Link>
			<Link to="/board">보드</Link>
		</Container>
	);
};

export default HomePage;
