import React, { FC } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import RegularButton from "../Buttons/RegularButton";
import { Props as BalanceProps } from "../../screens/Balance";

const ButtonSectionBackground = styled.View`
	width: 100%;
	align-items: center;
	flex: 1;
`;

const ButtonSection: FC = () => {
	const navigation = useNavigation<BalanceProps["navigation"]>();
	return (
		<ButtonSectionBackground>
			<RegularButton
				btnStyle={{ width: "50%" }}
				onPress={() => navigation.goBack()}
			>
				Cancel <Ionicons name="card" size={20} color={colors.white} />
			</RegularButton>
		</ButtonSectionBackground>
	);
};

export default ButtonSection;
