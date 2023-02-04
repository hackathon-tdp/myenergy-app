import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Wrapper = ({ alignItems, justifyContent, children }) => {
    return (
        <View
            style={StyleSheet.compose(
                { alignItems: alignItems, justifyContent: justifyContent },
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
        maxWidth: 330,
        alignSelf: "center",
    },
});
