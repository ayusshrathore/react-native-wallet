import React, { FC } from "react";
import {
	ImageSourcePropType,
	GestureResponderEvent,
	StyleProp,
	ViewStyle,
	ImageStyle,
} from "react-native";
import styled from "styled-components/native";

const StyledView = styled.TouchableOpacity`
	flex-direction: column;
	width: 45px;
	height: 45px;
	border-radius: 15px;
`;

const StyledImage = styled.Image`
	width: 100%;
	height: 100%;
	border-radius: 15px;
	resize-mode: cover;
`;

interface ProfileProps {
	image: ImageSourcePropType;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	imageStyle?: StyleProp<ImageStyle>;
	imageContainerStyle?: StyleProp<ViewStyle>;
}

const Profile: FC<ProfileProps> = ({
	onPress,
	image,
	imageStyle,
	imageContainerStyle,
}) => {
	return (
		<StyledView onPress={onPress} style={imageContainerStyle}>
			<StyledImage source={image} style={imageStyle} />
		</StyledView>
	);
};

export default Profile;
