import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import ThemeContext from "../ThemeContext";

export const Heading = ({ marginTop, children }) => {
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        heading: {
            marginTop: marginTop,

            fontFamily: theme.font.bold,
            fontSize: theme.textSize.large,
            color: theme.colors.headerText,
        },
    });

    return <Text style={styles.heading}>{children}</Text>;
};
