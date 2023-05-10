import { Text, View } from "react-native";
import React from "react";
import { InlineBox } from "../../../../components/base/InlineBox";
import Icon from "../../../../components/base/Icon";

const Box = ({ title, value, unit }) => {
	return (
		<View
			style={{
				backgroundColor: "#f2f2f2",
				width: "48%",
				padding: 12,
				borderRadius: 6,
			}}
		>
			<InlineBox>
				<Icon type="power" color="#000" />
				<Text
					style={{
						marginLeft: 6,
						marginTop: 3,
						fontSize: 14,
						fontFamily: "SenBold",
					}}
				>
					{title}
				</Text>
			</InlineBox>
			<InlineBox alignItems="baseline">
				<Text
					style={{
						fontFamily: "SenBold",
						fontSize: 28,
						color: "#000",
					}}
				>
					{value}
				</Text>
				<Text
					style={{
						marginLeft: 6,
						fontSize: 14,
						fontFamily: "SenBold",
					}}
				>
					{unit}
				</Text>
			</InlineBox>
		</View>
	);
};

export default Box;
