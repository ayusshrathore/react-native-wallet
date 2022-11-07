import React, { FC } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../../config/colors";

const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;

interface GreetingProps {
	mainText: string;
	subText: string;
	mainTextStyle?: StyleProp<TextStyle>;
	subTextStyle?: StyleProp<TextStyle>;
}

const Greeting: FC<GreetingProps> = ({
	mainText,
	mainTextStyle,
	subText,
	subTextStyle,
}) => {
	return (
		<StyledView>
			<RegularText
				textStyle={[
					{
						fontSize: 25,
						color: colors.secondary,
					},
					mainTextStyle,
				]}
			>
				{mainText}
			</RegularText>
			<SmallText
				textStyle={[
					{
						marginTop: 5,
						color: colors.graydark,
					},
					subTextStyle,
				]}
			>
				{subText}
			</SmallText>
		</StyledView>
	);
};

export default Greeting;
