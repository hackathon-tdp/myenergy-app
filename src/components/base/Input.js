import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export const TextInputExample = (props) => {
    return <TextInput style={styles.input} placeholder={props.placeholder} />;
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F4F6F9',
        fontSize: 20,
        width: '80%',
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
    },
});
