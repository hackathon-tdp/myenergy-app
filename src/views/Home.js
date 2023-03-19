import { Wrapper } from "../components/Wrapper";
import {
    TextInput,
    Text,
    Image,
    SafeAreaView,
    View,
    ImageBackground,
    Platform,
    StatusBar,
    Pressable,
    ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { Heading } from "../components/typography/Heading";
import { Description } from "../components/typography/Description";
import { InlineBox } from "../components/base/InlineBox";
import Icon from "../components/base/Icon";
import { LinearGradient } from "expo-linear-gradient";
import AppContext from "../components/AppContext";

const NoLocalisations = () => (
    <Wrapper justifyContent='center' alignItems='center'>
        <Image
            style={{
                width: 140,
                height: 60,
                resizeMode: "contain",
            }}
            source={require("../../assets/img/logo.png")}
        />
        <Image
            style={{
                marginTop: 90,
                width: 300,
                height: 250,
                resizeMode: "contain",
            }}
            source={require("../../assets/img/home.png")}
        />
        <Heading textAlign='center' marginTop={60}>
            Nie znaleziono żadnej lokalizacji
        </Heading>
        <Description textAlign='center' marginTop={11}>
            Aby dodać swoją pierwszą lokalizację, kliknij w poniższy przycisk
        </Description>
    </Wrapper>
);

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
                <Icon type='power' color='#000' />
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
            <InlineBox alignItems='baseline'>
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

const MainStats = () => {
    return (
        <View style={{ marginTop: 20 }}>
            <InlineBox type='space-between'>
                <Box title='Zużycie prądu' value='2156' unit='kWh' />
                <Box title='Koszt' value='1256' unit='zł' />
            </InlineBox>
            <InlineBox type='space-between' marginTop={9}>
                <Box title='Ilość urządzeń' value='125' unit='' />
                <Box title='Zużycie prądu' value='2156' unit='kWh' />
            </InlineBox>
        </View>
    );
};

const LocalisationList = () => {
    const Localisation = () => {
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
                    source={require("../../assets/defaults/house.png")}
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
                        Dom
                    </Text>
                </ImageBackground>
            </View>
        );
    };

    return (
        <View style={{ marginTop: 6 }}>
            <InlineBox type='space-between' marginTop={6}>
                <Localisation />
                <Localisation />
            </InlineBox>
            <InlineBox type='space-between' marginTop={10}>
                <Localisation />
                <Localisation />
            </InlineBox>
        </View>
    );
};

const LocalisationView = () => {
    return (
        <>
            <ImageBackground
                style={{
                    resizeMode: "cover",
                    width: "100%",
                    height: undefined,
                    aspectRatio: 16 / 9,
                }}
                source={require("../../assets/defaults/house.png")}
            >
                <SafeAreaView
                    style={{
                        width: 80,
                        height: 30,
                        backgroundColor: "rgba(200,200,200,0.65)",
                        marginTop:
                            (Platform.OS === "android"
                                ? StatusBar.currentHeight
                                : 0) + 7,
                        marginLeft: 20,
                        borderRadius: 200,
                    }}
                >
                    <InlineBox alignItems='center' marginTop={3}>
                        <View style={{ transform: [{ rotate: "90deg" }] }}>
                            <Icon type='arrow' color='#000' />
                        </View>
                        <Text style={{ fontFamily: "SenBold", marginLeft: 5 }}>
                            wróć
                        </Text>
                    </InlineBox>
                </SafeAreaView>
                <Text
                    style={{
                        fontFamily: "SenBold",
                        color: "#fff",
                        fontSize: 28,
                        marginLeft: 20,
                        bottom: 20,
                        position: "absolute",
                    }}
                >
                    Dom
                </Text>
                <View
                    style={{
                        bottom: 20,
                        right: 20,
                        position: "absolute",
                        flexDirection: "row",
                    }}
                >
                    <Pressable
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 200,
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon type='email' />
                    </Pressable>
                    <Pressable
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 200,
                            backgroundColor: "#fff",
                            marginLeft: 12,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon type='email' />
                    </Pressable>
                </View>
            </ImageBackground>
            <ScrollView>
                <Wrapper>
                    <Heading marginTop={26} size='small'>
                        Statystyki
                    </Heading>
                    <Description>Wszystkie pomieszczenia</Description>
                    <MainStats />
                    <Heading marginTop={38} size='small'>
                        Pomieszczenia
                    </Heading>
                    <Description>Wybierz, aby zobaczyć szczegóły</Description>
                    <LocalisationList />
                    <LocalisationList />
                    <LocalisationList />
                </Wrapper>
            </ScrollView>
        </>
    );
};

const HomeProper = () => {
    const {user} = useContext(AppContext);

    return (
        <ScrollView>
            <Wrapper>
                <Heading marginTop={100}>Witaj {user.username}</Heading>
                <Description>Oto twoje podsumowanie</Description>
                <Heading marginTop={38} size='small'>
                    Statystyki
                </Heading>
                <Description>Wszystkie lokalizacje</Description>
                <MainStats />
                <Heading marginTop={38} size='small'>
                    Lokalizacje
                </Heading>
                <Description>Wybierz, aby zobaczyć szczegóły</Description>
                <LocalisationList />
                <LocalisationList />
                <LocalisationList />
            </Wrapper>
        </ScrollView>
    );
};

export const Home = () => {
    const localisations = true;

    return localisations ? <HomeProper/> : <NoLocalisations />;
};
