import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Wrapper = (props) => {
    return <View style={styles.wrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 's`pace-'
        width: "100%",
        maxWidth: 330,
        alignSelf: "center",
    },
});
