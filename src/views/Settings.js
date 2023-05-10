import { createContext, useContext, useState } from "react";
import {
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Pressable,
	Switch,
} from "react-native";
import { Wrapper } from "../components/Wrapper";
import { Heading } from "../components/typography/Heading";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./home-view/Home";

const SettingsStack = createStackNavigator();

const Header = (props) => <View style={styles.header}>{props.children}</View>;

const Category = (props) => (
	<View>
		<View style={{ padding: 20 }}>
			<Heading>{props.title}</Heading>

			<View style={{ paddingTop: 10 }}>{props.children}</View>
		</View>
	</View>
);

const CategoryElement = (props) => {
	// TODO: BIG VARIANT - PROB TAKEN FROM props.type / props.variant smth like that
	const navigation = useContext(SettingsNavigationContext);

	const [isEnabled, toggleSwitch] = useState(false);

	return (
		<Pressable
			style={{
				flexDirection: "row",
				borderBottomColor: "#e4e4e4",
				borderBottomWidth: 1,
				height: 60,
				width: "100%",
				paddingVertical: 5,
			}}
			onPress={() => navigation.navigate(props.dest)}
		>
			<View>
				<Image
					source={require("../../assets/icons/question.png")}
					style={{ width: 50, height: 50 }}
				/>
			</View>
			<View style={{ flex: 1, padding: 5 }}>
				<Text style={{ fontSize: 18, fontFamily: "SenBold" }}>
					{props.title}
				</Text>
				<Text style={{ fontSize: 16, fontFamily: "Sen" }}>
					{props.desc}
				</Text>
			</View>
			<View>
				{/* <Switch
                    style={{ width: 50, height: 50 }}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /> */}
				<Image
					source={require("../../assets/icons/question.png")}
					style={{ width: 50, height: 50 }}
				/>
			</View>
		</Pressable>
	);
};

const SettingsNavigationContext = createContext(null);

const SettingsRoot = ({ navigation }) => {
	return (
		<SettingsNavigationContext.Provider value={navigation}>
			<Header>
				<Heading>Ustawienia</Heading>
			</Header>
			<ScrollView>
				<SafeAreaView>
					<Category title="Konto">
						<CategoryElement
							title="Dark mode"
							icon=""
							desc="Disabled"
							dest="under"
						/>
						<CategoryElement
							title="Notifications"
							icon=""
							desc="Enabled"
						/>
						<CategoryElement
							title="App info"
							icon=""
							desc="Report a bug"
						/>
					</Category>
					<Category title="Konto">
						<CategoryElement
							title="Dark mode"
							icon=""
							desc="Disabled"
						/>
						<CategoryElement
							title="Notifications"
							icon=""
							desc="Enabled"
						/>
						<CategoryElement
							title="App info"
							icon=""
							desc="Report a bug"
						/>
					</Category>
					<Category title="Konto">
						<CategoryElement
							title="Dark mode"
							icon=""
							desc="Disabled"
						/>
						<CategoryElement
							title="Notifications"
							icon=""
							desc="Enabled"
						/>
						<CategoryElement
							title="App info"
							icon=""
							desc="Report a bug"
						/>
					</Category>
					<Category title="Konto">
						<CategoryElement
							title="Dark mode"
							icon=""
							desc="Disabled"
						/>
						<CategoryElement
							title="Notifications"
							icon=""
							desc="Enabled"
						/>
						<CategoryElement
							title="App info"
							icon=""
							desc="Report a bug"
						/>
					</Category>
				</SafeAreaView>
			</ScrollView>
		</SettingsNavigationContext.Provider>
	);
};

export const Settings = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen
				name="Root"
				component={SettingsRoot}
				options={{ headerShown: false }}
			/>
			<SettingsStack.Screen
				name="under"
				component={Home}
				options={{ headerShown: false }}
			/>
		</SettingsStack.Navigator>
	);
};

//// dziwny

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: Dimensions.get("screen").height * 0.2,
		justifyContent: "center",
		padding: 40,
		// backgroundColor: "#def", // del
	},
});
