import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: #1d6495;
`;

const Header = () => {
	const state = { title: '21-2 MERN SESSION' };
	return <Title>{state.title}</Title>;
};

export default Header;
