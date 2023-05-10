import { Wrapper } from "../../../components/Wrapper";
import { ScrollView } from "react-native";
import React, { useContext } from "react";
import { Heading } from "../../../components/typography/Heading";
import { Description } from "../../../components/typography/Description";
import AppContext from "../../../components/AppContext";
import MainStats from "./MainStats/MainStats";
import LocalisationList from "./LocalisationsList/LocalisationsList";

const HomeProper = () => {
	const { user } = useContext(AppContext);

	return (
		<ScrollView>
			<Wrapper>
				<Heading marginTop={100}>Witaj {user.email}</Heading>
				<Description>Oto twoje podsumowanie</Description>
				<Heading marginTop={38} size="small">
					Statystyki
				</Heading>
				<Description>Wszystkie lokalizacje</Description>
				<MainStats />
				<Heading marginTop={38} size="small">
					Lokalizacje
				</Heading>
				<Description>Wybierz, aby zobaczyć szczegóły</Description>
				<LocalisationList />
			</Wrapper>
		</ScrollView>
	);
};

export default HomeProper;
