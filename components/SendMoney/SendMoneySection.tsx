import React, { FC, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";

import { colors } from "../../config/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { SendMoneySectionProps } from "./types";
import SendMoneyItem from "./SendMoneyItem";

const SendMoneySectionBackground = styled.View`
	width: 100%;
	padding-top: 10px;
	backgrounf-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
	width: 100%;
	flex: auto;
	min-height: 80%;
	padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FC<SendMoneySectionProps> = ({ data }) => {
	const sheetRef = useRef<BottomSheet>(null);
	const renderContent = () => {
		return (
			<SendMoneySectionBackground>
				<SendMoneyRow style={{ marginBottom: 25 }}>
					<RegularText
						textStyle={{
							fontSize: 20,
							color: colors.secondary,
						}}
					>
						Send money to
					</RegularText>
					<TextButton onPress={() => alert("Add")}>
						<SmallText
							textStyle={{
								fontWeight: "bold",
								color: colors.tertiary,
							}}
						>
							+Add
						</SmallText>
					</TextButton>
				</SendMoneyRow>
				<SendMoneyList
					data={data}
					contentContainerStyle={{
						alignItems: "flex-start",
					}}
					horizontal={false}
					showsVerticalScrollIndicator={false}
					numColumns={3}
					keyExtractor={({ id }: any) => id.toString()}
					renderItem={({ item }: any) => <SendMoneyItem {...item} />}
				/>
			</SendMoneySectionBackground>
		);
	};

	return (
		<BottomSheet
			ref={sheetRef}
			snapPoints={[500, 300, 0]}
			borderRadius={25}
			initialSnap={1}
			enabledContentTapInteraction={false}
			renderContent={renderContent}
		/>
	);
};

export default SendMoneySection;
