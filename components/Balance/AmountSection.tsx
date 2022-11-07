import React, { FC } from "react";
import styled from "styled-components/native";

import { colors } from "../../config/colors";
import { AmountProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const AmountSectionBackground = styled.View`
	flex: 1;
	padding-top: 5px;
	align-items: center;
	width: 100%;
`;

const AmountSection: FC<AmountProps> = ({ balance }) => {
	return (
		<AmountSectionBackground>
			<SmallText textStyle={{ color: colors.secondary, marginBottom: 20 }}>
				Total Balance
			</SmallText>
			<RegularText textStyle={{ color: colors.secondary, fontSize: 30 }}>
				₹{balance}
			</RegularText>
		</AmountSectionBackground>
	);
};

export default AmountSection;
