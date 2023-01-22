import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

export const BasicButton = (props) => {
    return <Pressable style={styles.button} {...props}>
        <View style={styles.buttonView}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00CC99',
        width: '50%',
        height: 60,
        margin: 12,
        borderRadius: 5,
    },
    buttonView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: 'Sen',
        fontSize: 20,
        color: '#ffffff'
    }
});
