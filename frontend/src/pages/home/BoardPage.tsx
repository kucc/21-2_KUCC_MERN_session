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
	width: 80%;
	justify-content: center;
	margin-top: 1rem;
`;

const BoardInput = styled.input`
	padding: 0.5rem;
	display: block;
	width: 70%;
	box-sizing: border-box;
	border: 1px solid black;
	outline: none;
	font: inherit;
	background: #fff;
`;

const BoardPage = () => {
	const [title, setTitle] = useState('');
	const [writer, setWriter] = useState('');
	const [content, setContent] = useState('');

	return (
		<Container>
			<h1>Board</h1>
			<InputContainer>
				<BoardInput value={title} onChange={(e) => setTitle(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<BoardInput value={writer} onChange={(e) => setWriter(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<BoardInput value={content} onChange={(e) => setContent(e.target.value)} />
			</InputContainer>
		</Container>
	);
};

export default BoardPage;
