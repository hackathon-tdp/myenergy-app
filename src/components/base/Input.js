import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = (props) => {
    

    return (
        <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            label={props.label}
            placeholder={props.placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default TextInputExample;