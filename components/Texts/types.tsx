import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TextProps {
	textStyle?: StyleProp<TextStyle>;
	children: ReactNode;
}
