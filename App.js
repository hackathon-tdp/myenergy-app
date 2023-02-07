//import 'react-native-gesture-handler';  // dont delete yet i need to check if everythings alright
import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/components/base/navigation/Navigation";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { lightTheme, darkTheme } from "./src/variables";
import ThemeContext from "./src/components/ThemeContext";

import { Login } from "./src/views/Login";
import { SignUp } from "./src/views/SignUp";
import { PasswordReset } from "./src/views/PasswordReset";
import { EmailSent } from "./src/views/EmailSent";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [theme, toggleTheme] = useState(false);

    const [loaded] = useFonts({
        Sen: require("./assets/fonts/Sen-Regular.ttf"),
        SenBold: require("./assets/fonts/Sen-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={style.app}>
            <ThemeContext.Provider value={theme ? darkTheme : lightTheme}>
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
            </ThemeContext.Provider>
        </View>
    );
}

const style = StyleSheet.create({
    app: {
        flex: 1,
    },
});
