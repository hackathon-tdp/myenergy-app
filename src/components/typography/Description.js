import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import ThemeContext from "../ThemeContext";

export const Description = ({ marginTop, textAlign, children }) => {
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        description: {
            marginTop: marginTop,
            textAlign: textAlign,

            fontFamily: theme.font.regular,
            fontSize: theme.textSize.medium,
            color: theme.colors.descriptionText,
        },
    });

    return <Text style={styles.description}>{children}</Text>;
};
