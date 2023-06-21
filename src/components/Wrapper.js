import React from "react";
import { StyleSheet, View } from "react-native";

export const Wrapper = ({
    alignItems,
    justifyContent,
    paddingBottom,
    backgroundColor,
    children,
}) => {
    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            width: "100%",
            paddingHorizontal: 28,
            alignSelf: "center",
            backgroundColor: backgroundColor ?? "#ffffff",
            alignItems: alignItems,
            justifyContent: justifyContent,
            paddingBottom: paddingBottom,
        },
    });

    return (
        <View style={styles.wrapper}>{children}</View>
    );
};
