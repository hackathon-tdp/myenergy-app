import React from "react";
import HomeProper from "./HomeProper/HomeProper";
import NoLocalisations from "./NoLocalisations";
import { View } from "react-native";

const Home = () => {
	const localisations = true;

	return localisations ? <HomeProper /> : <NoLocalisations />;
};

export default Home;
