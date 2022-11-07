import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../config/colors";
import { CardProps } from "../components/Cards/types";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avatar from "../assets/avatar/avatar.png";

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Balance from "../screens/Balance";

export type RootStackParamList = {
	Welcome: undefined;
	Home: undefined;
	Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colors.graylight,
						borderBottomWidth: 0,
						shadowColor: "transparent",
						shadowOpacity: 0,
						elevation: 0,
						height: 120,
					},
					headerTintColor: colors.secondary,
					headerRightContainerStyle: {
						paddingRight: 20,
					},
					headerLeftContainerStyle: {
						paddingLeft: 10,
					},
					headerRight: () => (
						<Profile
							image={Avatar}
							imageContainerStyle={{
								backgroundColor: colors.tertiary,
							}}
						/>
					),
				}}
				initialRouteName="Welcome"
			>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerTitle: (props) => (
							<Greeting
								mainText="Hey Freaker!"
								subText="Welcome back"
								{...props}
							/>
						),
						headerLeft: () => null,
					}}
				/>
				<Stack.Screen
					name="Balance"
					component={Balance}
					options={({ route }) => ({
						headerTitle: route?.params?.alias,
						headerTitleAlign: "center",
						headerBackImage: (props) => (
							<Ionicons
								{...props}
								name="chevron-back"
								size={25}
								color={colors.secondary}
							/>
						),
						headerLeftContainerStyle: {
							paddingLeft: 0,
						},
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
