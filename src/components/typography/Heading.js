import {StyleSheet, Text} from "react-native";
import {useFonts} from "expo-font";
import {themes} from "../../variables"
export const Heading = (props) =>{
    const [loaded] = useFonts({
        Sen: require('../../../assets/fonts/Sen-Regular.ttf'),
        SenBold: require('../../../assets/fonts/Sen-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return(
        <Text style={styles.heading}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SenBold",
        fontSize: 28,
        textAlign: "center",
        color: themes.light.text
    }
})