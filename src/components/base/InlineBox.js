import { View, StyleSheet } from "react-native";

export const InlineBox = ({ marginTop, type, children, alignItems}) => {
    const styles = StyleSheet.create({
        inlineBox: {
            marginTop: marginTop,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: type,
            alignItems: alignItems,
            width: '100%'
        },
    });

    return <View style={styles.inlineBox}>{children}</View>;
};
