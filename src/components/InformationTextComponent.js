import styled from 'styled-components/native';

const InformationTextComponent = styled.Text`
	margin-left: ${(props) => props.marginLeft}px;
	margin-right: ${(props) => props.marginLeft}px;
	top: ${(props) => props.top}px;
	text-align: ${(props) => props.textAlign};
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	font-family: 'DM Sans';
	line-height: 24px;
	letter-spacing: -0.4px;
	opacity: 0.6;
	color: #171717;
`;
export default InformationTextComponent;
