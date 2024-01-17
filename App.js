import "react-native-gesture-handler";
import { ActivityIndicator, View } from "react-native";
import React from "react";
import { globalStyles } from "./src/styles/global";
import { NavigationContainer } from "@react-navigation/native";
import Drawers from "./src/components/Drawers";
import { useGetWeather } from "./src/hooks/use-get-weather";

export default function App() {
	const [loading, error, weather] = useGetWeather();

	console.log(weather);

	return (
		<NavigationContainer>
			<Drawers weather={weather} />
		</NavigationContainer>
	);

	// return (
	// 	<View style={globalStyles.container}>
	// 		{error ? (
	// 			<View>
	// 				{" "}
	// 				<Text>Something bad happened</Text>
	// 			</View>
	// 		) : (
	// 			<View style={globalStyles.container}>
	// 				<ActivityIndicator size={"large"} />
	// 			</View>
	// 		)}
	// 	</View>
	// );
}
