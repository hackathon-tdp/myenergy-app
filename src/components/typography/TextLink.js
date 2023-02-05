import { Pressable, Text, StyleSheet } from "react-native";

export const TextLink = ({ onPress, marginTop, children }) => {
    return (
        <Pressable style={{ marginTop: marginTop }} onPress={onPress}>
            <Text style={styles.link}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    link: {
        fontFamily: "Sen",
        fontSize: 17,
        color: "#009973",
    },
});
