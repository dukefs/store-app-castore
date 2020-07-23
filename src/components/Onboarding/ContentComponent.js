import React from 'react';
import { View } from 'react-native';
import PrimaryButtonComponent from '../Buttons/PrimaryButtonComponent';
import InformationTextComponent from '../InformationTextComponent';
import TitleComponent from '../TitleComponent';

const ContentComponent = (props) => {
	return (
		<View>
			<TitleComponent top={550} textAlign="center">
				Welcome to CaStore !
			</TitleComponent>
			<InformationTextComponent top={580} textAlign="center" marginLeft={60} marginRight={60}>
				With long experience in the audio industry, we create the best quality products
			</InformationTextComponent>
			<PrimaryButtonComponent text="GET STARTED" image={require('../../assets/icons/arrows/arrow-long-right.png')} />
		</View>
	);
};

export default ContentComponent;
