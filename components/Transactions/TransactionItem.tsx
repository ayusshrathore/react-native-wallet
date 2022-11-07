import React, { FC } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { colors } from "../../config/colors";
import { TransactionProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Transaction from "./Transaction";

const TransactionRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 25px;
`;

const LeftView = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	flex: 2;
`;

const RightView = styled.View`
	flex: 1;
`;

const TransactionItem: FC<TransactionProps> = ({
	art,
	title,
	subtitle,
	amount,
	date,
}) => {
	return (
		<TransactionRow>
			<LeftView>
				<Transaction background={art.background} icon={art.icon} />
				<View style={{ marginLeft: 10 }}>
					<RegularText
						textStyle={{
							color: colors.secondary,
							textAlign: "left",
							marginBottom: 5,
						}}
					>
						{title}
					</RegularText>
					<SmallText textStyle={{ color: colors.graydark, textAlign: "left" }}>
						{subtitle}
					</SmallText>
				</View>
			</LeftView>
			<RightView>
				<RegularText
					textStyle={{
						color: colors.secondary,
						textAlign: "right",
						marginBottom: 5,
					}}
				>
					{amount}
				</RegularText>
				<SmallText textStyle={{ color: colors.graydark, textAlign: "right" }}>
					{date}
				</SmallText>
			</RightView>
		</TransactionRow>
	);
};

export default TransactionItem;
