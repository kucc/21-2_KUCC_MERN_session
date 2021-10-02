import React from 'react';
import styled from 'styled-components';

const Intro = styled.div`
	p {
		font-weight: bold;
	}
`;

const Info = styled.div`
	p {
		text-align: left;
	}
`;

interface Props {
	name: string;
	age: string;
	hobby: string;
	major: string;
}
const Body = ({ name, age, hobby, major }: Props) => {
	return (
		<>
			<Intro>
				<p>안녕하세요! 이번 세션 출석담당 {name}입니다.</p>
			</Intro>
			<Info>
				<p>이름: {name}</p>
				<p>나이: {age}</p>
				<p>전공: {major}</p>
				<p>취미: {hobby}</p>
			</Info>
		</>
	);
};

export default Body;
