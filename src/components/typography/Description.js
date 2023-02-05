import { StyleSheet, Text } from "react-native";
import { themes } from "../../variables";

export const Description = ({ marginTop, textAlign, children }) => {
    return (
        <Text
            style={StyleSheet.compose(styles.description, {
                marginTop: marginTop,
                textAlign: textAlign,
            })}
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
