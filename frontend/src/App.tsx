import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

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

const App = () => {
	const state = {
		name: '유영인',
		age: '23',
		hobby: '통기타, 배드민턴, 맨유, 아이유',
		major: '영어영문학과 / 컴퓨터학과',
		contact: 'Email: yyi990202@korea.ac.kr / Mobile: 010. 3301. 4046',
	};
	return (
		<Container>
			<Header />
			<Body name={state.name} age={state.age} hobby={state.hobby} major={state.major} />
			<Footer contact={state.contact} />
		</Container>
	);
};

export default App;
