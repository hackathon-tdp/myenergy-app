import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "./Icon";
import { Button, Pressable } from "react-native";
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";

export const Input = ({
    marginTop,
    placeholder,
    secure,
    autoComplete,
    icon,
}) => {
    // const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //     {label: 'AGD', value: 'agd'},
    //     {label: 'RTV', value: 'rtv'},
    //     {label: 'Fridge', value: 'fridge'}
    // ]);

    return (
        <View
            style={StyleSheet.compose(styles.container, {
                marginTop: marginTop,
            })}
        >
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='#09101D'
                secureTextEntry={secure}
                value={value}
                onChangeText={setValue}
                autoComplete={autoComplete}
            />
            <Pressable style={styles.icon}>
                <Icon type={icon} color={"#000"} />
            </Pressable>
        </View>

        // <DropDownPicker
        //     open={open}
        //     value={value}
        //     items={items}
        //     setOpen={setOpen}
        //     setValue={setValue}
        //     setItems={setItems}
        // />
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
    },

    icon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: 48,
        width: 24,
        height: 24,
    },

    input: {
        backgroundColor: "#F4F6F9",
        fontSize: 16,
        height: 48,
        borderRadius: 5,
        paddingHorizontal: 16,
        paddingRight: 70,
        color: "#09101D",
        fontFamily: "Sen",
    },
});
