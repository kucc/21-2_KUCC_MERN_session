import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 5rem;
`;

interface Props {
	contact: string;
}

const Footer = ({ contact }: Props) => {
	return <Container>{contact}</Container>;
};

export default Footer;
