import { StyleSheet, Text } from "react-native";
import { themes } from "../../variables";

export const Heading = (props) => {
    return <Text style={styles.heading}>{props.children}</Text>;
};

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SenBold",
        fontSize: 28,
        textAlign: "center",
        color: themes.light.text,
    },
});
