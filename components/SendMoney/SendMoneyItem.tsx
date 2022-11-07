import React, { FC } from "react";
import styled from "styled-components/native";

import { colors } from "../../config/colors";
import { ScreenWidth } from "../shared";
import { SendMoneyProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Header/Profile";

const SendMoneyItemContainer = styled.TouchableHighlight`
	height: 130px;
	width: ${ScreenWidth * 0.27}px;
	padding: 10px;
	border-radius: 15px;
	justify-content: space-around;
	margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FC<SendMoneyProps> = ({
	background,
	image,
	name,
	amount,
}) => {
	return (
		<SendMoneyItemContainer
			underlayColor={colors.secondary}
			style={{
				backgroundColor: background,
			}}
			onPress={() => alert("Send money")}
		>
			<>
				<Profile image={image} imageContainerStyle={{ marginBottom: 10 }} />
				<SmallText
					textStyle={{ color: colors.white, fontSize: 12, textAlign: "left" }}
				>
					{name}
				</SmallText>
				<RegularText
					textStyle={{ color: colors.white, fontSize: 14, textAlign: "left" }}
				>
					{amount}
				</RegularText>
			</>
		</SendMoneyItemContainer>
	);
};

export default SendMoneyItem;
