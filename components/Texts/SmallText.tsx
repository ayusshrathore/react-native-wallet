import React, { FC } from "react";
import styled from "styled-components/native";

import { colors } from "../../config/colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
	color: ${colors.gray};
	font-size: 13px;
	text-align: left;
	font-family: Inter-Regular;
`;

const SmallText: FC<TextProps> = ({ textStyle, children }) => {
	return <StyledText style={textStyle}>{children}</StyledText>;
};

export default SmallText;
