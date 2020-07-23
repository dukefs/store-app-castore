import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const PrimaryButtonComponent = (props) => {
	return (
		<TouchableHighlight>
			<ButtonView>
				<ButtonText>{props.text}</ButtonText>
				<ButtonImage source={props.image} />
			</ButtonView>
		</TouchableHighlight>
	);
};

const ButtonView = styled.View`
	top: 630px;
	left: 13%;
	background-color: #ffdb47;
	border-radius: 6px;
	height: 44px;
	width: 305px;
	align-items: center;
	justify-content: center;
`;

const ButtonText = styled.Text`
	font-family: 'DM Sans';
	color: #171717;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 20px;
	letter-spacing: 1px;
`;

const ButtonImage = styled.Image`
	width: 24px;
	height: 24px;
	left: 260px;
	position: absolute;
`;

export default PrimaryButtonComponent;
