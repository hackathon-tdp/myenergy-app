import { Wrapper } from "../../components/Wrapper";
import { Image } from "react-native";
import React from "react";
import { Heading } from "../../components/typography/Heading";
import { Description } from "../../components/typography/Description";

const NoLocalisations = () => (
	<Wrapper justifyContent="center" alignItems="center">
		<Image
			style={{
				width: 140,
				height: 60,
				resizeMode: "contain",
			}}
			source={require("../../../assets/img/logo.png")}
		/>
		<Image
			style={{
				marginTop: 90,
				width: 300,
				height: 250,
				resizeMode: "contain",
			}}
			source={require("../../../assets/img/home.png")}
		/>
		<Heading textAlign="center" marginTop={60}>
			Nie znaleziono żadnej lokalizacji
		</Heading>
		<Description textAlign="center" marginTop={11}>
			Aby dodać swoją pierwszą lokalizację, kliknij w poniższy przycisk
		</Description>
	</Wrapper>
);

export default NoLocalisations;
