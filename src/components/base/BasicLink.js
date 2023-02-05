import React from "react";

import { StyleSheet, Pressable, Text, View } from "react-native";

import { themes } from "../../variables";

export const BasicLink = (props) => {
    return (
        <Pressable style={styles.buttonPressable} {...props}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonPressable: {
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: "Sen",
        fontSize: 17,
        color: '#009973',
    },
});
