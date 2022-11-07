import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../config/colors";
import { Container } from "../components/shared";

import { RootStackParamList } from "../navigation/RootNavigation";
import { StackScreenProps } from "@react-navigation/stack";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

export type Props = StackScreenProps<RootStackParamList, "Balance">;

const BalanceContainer = styled(Container)`
	background-color: ${colors.graylight};
	width: 100%;
	padding: 25px;
	flex: 1;
`;

const Balance: FC<Props> = ({ route }) => {
	return (
		<BalanceContainer>
			<StatusBar style="dark" />
			<AmountSection balance={route?.params?.balance} />
			<BalanceCardSection {...route?.params} />
			<ButtonSection />
		</BalanceContainer>
	);
};

export default Balance;
