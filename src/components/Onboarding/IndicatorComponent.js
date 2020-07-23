import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

const IndicatorComponent = (props) => {
	return (
		<View style={styles.container}>
			<StyledView //
				width={8}
				left={179}
				backgroundColor="#8f92a1"
				opacity={0.2}
			/>
			<StyledView //
				width={16}
				left={195}
				backgroundColor="#ffdb47"
				opacity={1}
			/>
			<StyledView //
				width={8}
				left={219}
				backgroundColor="#8f92a1"
				opacity={0.2}
			/>
		</View>
	);
};

const StyledView = styled.View`
	width: ${(props) => props.width}px;
	height: 5px;
	left: ${(props) => props.left}px;
	top: 477px;
	position: absolute;

	background-color: ${(props) => props.backgroundColor};
	opacity: ${(props) => props.opacity};
	border-radius: 2.5px;
`;

const styles = StyleSheet.create({
	container: {}
});

export default IndicatorComponent;
