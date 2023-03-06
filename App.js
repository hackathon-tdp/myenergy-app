//import 'react-native-gesture-handler';  // dont delete yet i need to check if everythings alright
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/components/base/navigation/Navigation";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import AppContext, { AppProvider } from "./src/components/AppContext";
import UserAuth from "./src/views/UserAuth";

const AppProper = () => {
    const { isLoggedIn } = React.useContext(AppContext);

    return <>{isLoggedIn ? <Navigation /> : <UserAuth />}</>;
};

export default function App() {
    const [loaded] = useFonts({
        Sen: require("./assets/fonts/Sen-Regular.ttf"),
        SenBold: require("./assets/fonts/Sen-Bold.ttf"),
        SourceSansProSemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={style.app}>
            <AppProvider>
                <NavigationContainer>
                    <AppProper />
                </NavigationContainer>
            </AppProvider>
        </View>
    );
}

const style = StyleSheet.create({
    app: {
        flex: 1,
    },
});
