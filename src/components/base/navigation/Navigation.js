import * as React from "react";
import { StyleSheet, Image, Modal, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../../views/home-view/Home";
import { Devices } from "../../../views/Devices";
import { Statistics } from "../../../views/Statistics";
import { AddForm } from "../../../views/AddForm";
import { Settings } from "../../../views/Settings";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
	const [modalVisible, toggleModalVisible] = React.useState(false);

	const styles = StyleSheet.create({
		plus: {
			backgroundColor: "232323",
		},
	});

	return (
		<>
			<AddForm visible={modalVisible} toggle={toggleModalVisible} />
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: "#00CC99",
					tabBarInactiveTintColor: "#232323",
					headerShown: false,
					tabBarStyle: {
						borderTopWidth: 0,
					},
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="home"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Devices"
					component={Devices}
					options={{
						tabBarLabel: "Devices",
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="cellphone-link"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Add"
					component={AddForm}
					listeners={{
						tabPress: (e) => {
							e.preventDefault();
							toggleModalVisible(true);
						},
					}}
					options={{
						tabBarLabel: () => null,
						tabBarItemStyle: {
							position: "relative",
							bottom: 20,
							borderRadius: 100,
						},
						tabBarIcon: ({ color, size }) => (
							<Image
								style={{
									width: 60,
									height: 60,
								}}
								source={require("../../../../assets/icons/plus.png")}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Statistics"
					component={Statistics}
					options={{
						tabBarLabel: "Statistics",
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="poll"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={Settings}
					options={{
						tabBarLabel: "Settings",
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="cog"
								color={color}
								size={size}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
};
