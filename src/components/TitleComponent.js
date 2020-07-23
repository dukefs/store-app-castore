import styled from 'styled-components/native';

const TitleComponent = styled.Text`
	top: ${(props) => props.top}px;
	text-align: ${(props) => props.textAlign};
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	font-family: 'DM Sans';
	line-height: 32px;
	letter-spacing: -0.8px;
	color: #171717;
`;

export default TitleComponent;
