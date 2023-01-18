import {StyleSheet, Text} from "react-native";
import {useFonts} from "expo-font";

export const Description = (props) =>{

    const [loaded] = useFonts({
        Sen: require('../../../assets/fonts/Sen-Regular.ttf'),
        SenBold: require('../../../assets/fontsSen-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return(
        <Text style={styles.description}>{props.content}</Text>
    )
}

const styles = StyleSheet.create({
    description:{
        fontFamily: "Sen",
        fontSize: 17,
        paddingHorizontal: 20,
        marginTop:12,
        textAlign: "center"
    }
})