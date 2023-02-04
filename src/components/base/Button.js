import { Pressable, Text, StyleSheet } from "react-native";

export const Button = ({ marginTop, onPress, children }) => {
    return (
        <Pressable
            style={{
                marginTop: marginTop,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00cc99",
                width: "50%",
                borderRadius: 6,
            }}
            onPress={onPress}
        >
            <Text style={{ fontFamily: "Sen", fontSize: 17, color: "white" }}>
                {children}
            </Text>
        </Pressable>
    );
};