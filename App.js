import * as React from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { Navigation } from "./src/components/base/navigation/Navigation";
import { Login } from "./src/views/Login";
import { useState, createContext, useContext } from "react";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Navigation></Navigation>
            ) : (
                <Login loginSetter={setIsLoggedIn}></Login>
            )}
        </NavigationContainer>
    );
}
