import React from 'react';
import styled from 'styled-components/native';
import CircleComponent from '../components/Onboarding/CircleComponent';
import ContentComponent from '../components/Onboarding/ContentComponent';
import IndicatorComponent from '../components/Onboarding/IndicatorComponent';

const App = () => {
	return (
		<ContainerSafe>
			<CircleComponent
				backgroundColor="#8f92a1"
				height={205}
				width={205}
				borderRadius={103}
				left={-103}
				top={300}
				opacity={0.4}
			/>
			<CircleComponent
				backgroundColor="#ffdb47"
				height={305}
				width={305}
				borderRadius={153}
				left={253}
				top={60}
				opacity={1}
			/>
			<OnboardingImage source={require('../assets/img/beoplay-a9-4-gen-hero-black.png')} />
			<IndicatorComponent />
			<ContentComponent />
		</ContainerSafe>
	);
};

const OnboardingImage = styled.Image`
	width: 305px;
	height: 305px;
	top: 130px;
	left: 40px;
	position: absolute;
`;

const ContainerSafe = styled.SafeAreaView`
	flex-grow: 1;
	background-color: #f2f2f2;
`;

export default App;
