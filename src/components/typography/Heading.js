import { StyleSheet, Text } from "react-native";
import { themes } from "../../variables";

export const Heading = (props) => {
    
    

    const styles = StyleSheet.create({
        heading: {
            fontFamily: "SenBold",
            fontSize: 28,
            color: themes.light.text,
        },
    });

    return <Text style={styles.heading}>{props.children}</Text>;
};


