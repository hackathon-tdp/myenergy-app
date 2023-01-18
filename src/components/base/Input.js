import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export const TextInputExample = () => {
    return <TextInput style={styles.input} label='label' />;
};

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
