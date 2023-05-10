import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { InlineBox } from "../../../../components/base/InlineBox";
import API from "../../../../requests";
import Localisation from "./Localisation";

const LocalisationList = () => {
	const [localisations, setLocalisations] = useState([]);

	const featchLocalisations = async () => {
		const { data } = await API.get("locations/");
		setLocalisations(data);
	};

	useEffect(() => {
		featchLocalisations();
	}, []);

	return (
		<View style={{ marginTop: 6 }}>
			<InlineBox type="space-between" marginTop={6}>
				{localisations.map(({ name, img, id }) => (
					<Localisation key={id} name={name} img={img} />
				))}
			</InlineBox>
		</View>
	);
};

export default LocalisationList;
