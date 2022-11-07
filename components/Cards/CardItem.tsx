import React, { FC } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CardProps } from "./types";
import { ScreenWidth } from "../shared";
import { colors } from "../../config/colors";
import Background from "../../assets/bgs/bg_transparent.png";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { Props as HomeProps } from "../../screens/Home";

const CardBackground = styled.ImageBackground`
	height: 75%;
	width: ${ScreenWidth * 0.67}px;
	resize-mode: cover;
	background-color: ${colors.accent};
	border-radius: 25px;
	margin-right: 25px;
	overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
	height: 100%;
	border-radius: 25px;
`;

const TouchableView = styled.View`
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
`;

const CardRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Logo = styled.Image`
	width: 100%;
	height: 80%;
	resize-mode: contain;
	flex: 1;
`;

const CardItem: FC<CardProps> = (props) => {
	const navigation = useNavigation<HomeProps["navigation"]>();

	const handlePress = () => {
		navigation.navigate("Balance", { ...props });
	};

	return (
		<CardBackground source={Background}>
			<CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
				<TouchableView>
					<CardRow>
						<RegularText>{props.accountNo}</RegularText>
					</CardRow>
					<CardRow>
						<View style={{ flex: 3 }}>
							<SmallText textStyle={{ color: colors.white, marginBottom: 10 }}>
								Account Balance
							</SmallText>
							<RegularText textStyle={{ color: colors.white }}>
								₹ {props.balance}
							</RegularText>
						</View>
						<Logo source={props.logo} />
					</CardRow>
				</TouchableView>
			</CardTouchable>
		</CardBackground>
	);
};

export default CardItem;
