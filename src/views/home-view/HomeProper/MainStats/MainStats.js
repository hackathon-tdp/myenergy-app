import { View, Text } from "react-native";
import React from "react";
import Box from "./Box";
import { InlineBox } from "../../../../components/base/InlineBox";

const MainStats = () => {
	return (
		<View style={{ marginTop: 20 }}>
			<InlineBox type="space-between">
				<Box title="Zużycie prądu" value="2156" unit="kWh" />
				<Box title="Koszt" value="1256" unit="zł" />
			</InlineBox>
			<InlineBox type="space-between" marginTop={9}>
				<Box title="Ilość urządzeń" value="125" unit="" />
				<Box title="Zużycie prądu" value="2156" unit="kWh" />
			</InlineBox>
		</View>
	);
};

export default MainStats;
