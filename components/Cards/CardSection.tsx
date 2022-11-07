import React, { FC } from "react";
import styled from "styled-components/native";
import CardItem from "./CardItem";

import { CardSectionProps } from "./types";

const CardList = styled.FlatList`
	flex: 1;
	width: 100%;
	padding-left: 25px;
	padding-bottom: 15px;
`;

const CardSection: FC<CardSectionProps> = ({ data }) => {
	return (
		<CardList
			data={data}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 50, alignItems: "center" }}
			keyExtractor={({ id }: any) => id.toString()}
			renderItem={({ item }: any) => <CardItem {...item} />}
		/>
	);
};

export default CardSection;
