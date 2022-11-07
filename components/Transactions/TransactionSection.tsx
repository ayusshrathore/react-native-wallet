import React, { FC } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import { TransactionSectionProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
	width: 100%;
	padding-horizontal: 25px;
	padding-top: 5px;
	flex: 2;
`;

const TransactionRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const TransactionList = styled.FlatList`
	width: 100%;
`;

const TransactionSection: FC<TransactionSectionProps> = ({ data }) => {
	return (
		<TransactionSectionBackground>
			<TransactionRow
				style={{
					marginBottom: 25,
				}}
			>
				<RegularText textStyle={{ fontSize: 20, color: colors.secondary }}>
					Transactions
				</RegularText>
				<SmallText
					textStyle={{
						color: colors.secondary,
						fontSize: 15,
					}}
				>
					Recent{" "}
					<Ionicons name="caret-down" size={13} color={colors.graydark} />
				</SmallText>
			</TransactionRow>
			<TransactionList
				data={data}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 25 }}
				keyExtractor={({ id }: any) => id.toString()}
				renderItem={({ item }: any) => <TransactionItem {...item} />}
			/>
		</TransactionSectionBackground>
	);
};

export default TransactionSection;
