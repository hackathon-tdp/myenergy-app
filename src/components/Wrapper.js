import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Wrapper = ({ alignItems, justifyContent, paddingBottom, children }) => {
    return (
        <View
            style={StyleSheet.compose(
                { alignItems: alignItems, justifyContent: justifyContent, paddingBottom: paddingBottom },
                styles.wrapper
            )}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 28,
        alignSelf: "center",
        backgroundColor: "#fff",
    },
});
