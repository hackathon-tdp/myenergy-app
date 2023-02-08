import { View, StyleSheet } from "react-native";

export const InlineBox = ({ marginTop, type, children }) => {
    const styles = StyleSheet.create({
        inlineBox: {
            marginTop: marginTop,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: type,
        },
    });

    return <View style={styles.inlineBox}>{children}</View>;
};
