import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import RootNavigation from "./navigation/RootNavigation";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
		"Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	const onFinish = async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	};

	useEffect(() => {
		onFinish();
	}, [fontsLoaded]);

	if (fontsLoaded) return <RootNavigation />;
	else return null;
}
