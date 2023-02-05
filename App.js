//import 'react-native-gesture-handler';  // dont delete yet i need to check if everythings alright
import * as React from "react";
import { useState, createContext, useContext } from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { Navigation } from "./src/components/base/navigation/Navigation";
import { useFonts } from "expo-font";
import {StyleSheet, View} from "react-native";

import { Login } from "./src/views/Login";
import { SignUp } from "./src/views/SignUp";
import { PasswordReset } from "./src/views/PasswordReset";
import { EmailSent } from "./src/views/EmailSent";

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
                    <Login loginSetter={setIsLoggedIn} />
                    // <SignUp loginSetter={setIsLoggedIn} />
                    // <PasswordReset />
                    // <EmailSent />
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
