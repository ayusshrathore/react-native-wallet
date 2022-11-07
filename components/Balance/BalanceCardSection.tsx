import React, { FC } from "react";
import styled from "styled-components/native";

import { BalanceCardProps } from "./types";
import BalanceCard from "./BalanceCard";

const BalanceCardSectionBackground = styled.View`
	flex: 2;
	align-items: center;
	width: 100%;
`;

const BalanceCardSection: FC<BalanceCardProps> = (props) => {
	return (
		<BalanceCardSectionBackground>
			<BalanceCard {...props} />
		</BalanceCardSectionBackground>
	);
};

export default BalanceCardSection;
