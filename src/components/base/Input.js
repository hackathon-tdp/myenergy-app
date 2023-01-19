import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = (props) => {
    return <TextInput style={styles.input} placeholder={props.placeholder}/>;
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
        fontFamily: 'Sen'
    },
});
