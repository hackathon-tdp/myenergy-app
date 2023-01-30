import * as React from "react";
import { useState, createContext, useContext, } from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { Navigation } from "./src/components/base/navigation/Navigation";
import { Login } from "./src/views/Login";
import { useFonts } from "expo-font";
import {StyleSheet, View} from "react-native";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [loaded] = useFonts({
        Sen: require("./assets/fonts/Sen-Regular.ttf"),
        SenBold: require("./assets/fonts/Sen-Bold.ttf"),
    });

    if(!loaded) {
        return null;
    }

    return (
        <View style={style.app}>
            <NavigationContainer>
                {isLoggedIn ? (
                    <Navigation></Navigation>
                ) : (
                    <Login loginSetter={setIsLoggedIn}></Login>
                )}
            </NavigationContainer>
        </View>
    );
}

const style = StyleSheet.create({
    app: {
        flex: 1,
    }
})
