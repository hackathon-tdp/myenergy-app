import { Text, View, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Localisation = ({ img, name }) => {
	return (
		<View
			style={{
				resizeMode: "contain",
				width: "48%",
				height: undefined,
				aspectRatio: 16 / 9,
				borderRadius: 6,
				overflow: "hidden",
			}}
		>
			<ImageBackground
				style={{
					resizeMode: "contain",
					width: "100%",
					height: undefined,
					aspectRatio: 16 / 9,
				}}
				source={
					img
						? img
						: require("../../../../../assets/defaults/house.png")
				}
			>
				<LinearGradient
					colors={["transparent", "rgba(25,23,23,0.65)"]}
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}
				/>
				<Text
					style={{
						color: "#ffffff",
						fontSize: 20,
						fontFamily: "SenBold",
						position: "absolute",
						bottom: 6,
						right: 10,
					}}
				>
					{name}
				</Text>
			</ImageBackground>
		</View>
	);
};

export default Localisation;
