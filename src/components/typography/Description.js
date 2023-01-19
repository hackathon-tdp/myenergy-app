import { StyleSheet, Text } from "react-native";


export const Description = (props) => {
    return <Text style={styles.description}>{props.content}</Text>;
};

const styles = StyleSheet.create({
    description: {
        fontFamily: "Sen",
        fontSize: 17,
        paddingHorizontal: 20,
        marginTop: 12,
        textAlign: "center",
    },
});
