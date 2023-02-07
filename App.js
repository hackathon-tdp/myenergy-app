//import 'react-native-gesture-handler';  // dont delete yet i need to check if everythings alright
import * as React from "react";
import { useState, createContext, useContext } from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { Navigation } from "./src/components/base/navigation/Navigation";
import { useFonts } from "expo-font";
import {StyleSheet, View} from "react-native";

import { Login } from "./src/views/user-auth/Login";
import { SignUp } from "./src/views/user-auth/SignUp";
import { PasswordReset } from "./src/views/user-auth/PasswordReset";
import { EmailSent } from "./src/views/user-auth/EmailSent";
import UserAuth from "./src/views/UserAuth";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [loaded] = useFonts({
        Sen: require("./assets/fonts/Sen-Regular.ttf"),
        SenBold: require("./assets/fonts/Sen-Bold.ttf"),
        SourceSansProSemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf")
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
                    <UserAuth></UserAuth>
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
