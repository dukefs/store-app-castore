import React from 'react';
import styled from 'styled-components/native';

const CircleComponent = (props) => {
	return (
		<StyledView
			backgroundColor={props.backgroundColor}
			height={props.height}
			width={props.width}
			borderRadius={props.borderRadius}
			left={props.left}
			top={props.top}
			opacity={props.opacity}
		/>
	);
};

const StyledView = styled.View`
	background-color: ${(props) => props.backgroundColor};
	opacity: ${(props) => props.opacity};
	height: ${(props) => props.height}px;
	width: ${(props) => props.width}px;
	border-radius: ${(props) => props.borderRadius}px;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;
	position: absolute;
`;

export default CircleComponent;
