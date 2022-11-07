import React, { FC } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import { TransactionItemProps } from "./types";

const StyledView = styled.View`
	height: 45px;
	width: 45px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
`;

const Transaction: FC<TransactionItemProps> = ({ background, icon }) => {
	return (
		<StyledView
			style={{
				backgroundColor: background,
			}}
		>
			<Ionicons name={icon} size={25} color={colors.white} />
		</StyledView>
	);
};

export default Transaction;
