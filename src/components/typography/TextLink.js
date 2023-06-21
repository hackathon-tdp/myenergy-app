import { useContext } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import ThemeContext from "../ThemeContext";

export const TextLink = ({ onPress, marginTop, children }) => {
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        link: {
            fontFamily: theme.font.regular,
            fontSize: theme.textSize.medium,
            color: theme.colors.linkText
        },
    });

    return (
        <Pressable style={{ marginTop: marginTop }} onPress={onPress}>
            <Text style={styles.link}>{children}</Text>
        </Pressable>
    );
};