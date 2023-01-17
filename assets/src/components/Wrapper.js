import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import { useFonts } from 'expo-font';
export const Wrapper = (props) => {
    const [loaded] = useFonts({
        Sen: require('../fonts/Sen-Regular.ttf'),
        SenBold: require('../fonts/Sen-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return(
        <View style={styles.wrapper}>
            <View>
                <Text style={{
                    marginTop: 80
                }}>
                    {props.children}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
});