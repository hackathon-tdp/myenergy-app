import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import AppContext from "../AppContext";

export const Heading = ({ marginTop, textAlign, children, size }) => {
    const { theme } = useContext(AppContext);

    const styles = StyleSheet.create({
        heading: {
            marginTop: marginTop,
            textAlign: textAlign,

            fontFamily: theme.font.bold,
            fontSize: size==='small'? theme.textSize.big : theme.textSize.large,
            color: theme.colors.headerText,
        },
    });

    return <Text style={styles.heading}>{children}</Text>;
};
