import React, { Children, FC } from "react";
import styled from "styled-components/native";
import {
	GestureResponderEvent,
	StyleProp,
	TextStyle,
	ViewStyle,
} from "react-native";

import { colors } from "../../config/colors";
import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
	background-color: ${colors.primary};
	padding: 25px;
	border-radius: 20px;
	width: 100%;
	align-items: center;
`;

interface ButtonProps {
	btnStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	onPress: (event: GestureResponderEvent) => void | undefined;
	children: React.ReactNode;
}

const RegularButton: FC<ButtonProps> = ({
	onPress,
	btnStyle,
	textStyle,
	children,
}) => {
	return (
		<ButtonView onPress={onPress} style={btnStyle}>
			<RegularText textStyle={textStyle}>{children}</RegularText>
		</ButtonView>
	);
};

export default RegularButton;
