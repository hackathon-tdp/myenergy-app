import { View, StyleSheet } from "react-native";

export const InlineBox = ({ marginTop, children }) => {
    return (
        <View
            style={StyleSheet.compose(styles.inlineBox, {
                marginTop: marginTop,
            })}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    inlineBox: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
