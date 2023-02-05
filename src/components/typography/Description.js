import { StyleSheet, Text } from "react-native";
import { themes } from "../../variables";

export const Description = ({ marginTop, textAlign, children }) => {
    return (
        <Text
            style={StyleSheet.compose(
                { marginTop: marginTop, textAlign: textAlign },
                styles.description
            )}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    description: {
        fontFamily: "Sen",
        fontSize: 17,
        color: themes.light.text,
    },
});
