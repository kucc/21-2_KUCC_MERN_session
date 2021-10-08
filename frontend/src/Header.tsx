import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: #1d6495;
`;

interface Props {
	title: string;
}

const Header = ({ title }: Props) => {
	return <Title>{title}</Title>;
};

export default Header;
