import React from "react";
import Home from "../screens/Home";
import UpcomingWeather from "../screens/UpcomingWeather";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./Header";

const Drawer = createDrawerNavigator();

export default function Drawers({ weather }) {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Home"
				children={() => (
					<Home weatherData={weather.list[0]} cityData={weather.city} />
				)}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title={weather.city.name} />
						),
					};
				}}
			/>
			<Drawer.Screen name="Upcoming" component={UpcomingWeather} />
		</Drawer.Navigator>
	);
}
