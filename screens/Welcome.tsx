import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../config/colors";
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";

import { RootStackParamList } from "../navigation/RootNavigation";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

import background from "../assets/bgs/bg.png";

const WelcomeContainer = styled(Container)`
	background-color: ${colors.secondary};
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

const TopSection = styled.View`
	width: 100%;
	max-height: 50%;
	flex: 1;
`;

const BottomSection = styled.View`
	width: 100%;
	padding: 25px;
	flex: 1;
`;

const TopImage = styled.Image`
	width: 100%;
	height: 100%;
	resize-mode: stretch;
`;

const Welcome: FC<Props> = ({ navigation }) => {
	return (
		<>
			<StatusBar style="light" />
			<WelcomeContainer>
				<TopSection>
					<TopImage source={background} />
				</TopSection>
				<BottomSection>
					<BigText
						textStyle={{ marginTop: 100, marginBottom: 25, width: "70%" }}
					>
						Best way to track your money.
					</BigText>
					<RegularText textStyle={{ marginBottom: 50, width: "70%" }}>
						We help you to manage your money and track your expenses.
					</RegularText>
					<RegularButton
						onPress={() => {
							navigation.navigate("Home");
						}}
					>
						Get Started
					</RegularButton>
				</BottomSection>
			</WelcomeContainer>
		</>
	);
};

export default Welcome;
