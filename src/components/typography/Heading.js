import { StyleSheet, Text } from "react-native";
import { themes } from "../../variables";

export const Heading = ({ marginTop, children }) => {
    return (
        <Text
            style={StyleSheet.compose({ marginTop: marginTop }, styles.heading)}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SenBold",
        fontSize: 28,
        color: themes.light.text,
    },
});
