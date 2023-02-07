import {Pressable, StyleSheet, Text} from "react-native";

export const Button = ({isFilled = true, marginTop, onPress, children}) => {
    let buttonStyle = isFilled ? styles.filled : styles.border
    return (
        <Pressable
            style={StyleSheet.compose(
                buttonStyle,
                {
                    marginTop: marginTop
                },
            )}
            onPress={onPress}
        >
            <Text style={buttonStyle.text}>
                {children}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    filled: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00cc99",
        width: "48%",
        borderRadius: 6,
        maxWidth: 160,
        text: {
            color: "#fff",
            fontFamily: "SourceSansProSemiBold",
            fontSize: 16,
        }
    },
    border: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "48%",
        borderRadius: 6,
        maxWidth: 160,
        borderWidth: 3,
        borderColor: '#00cc99',
        borderStyle: 'solid',
        text: {
            color: "#00cc99",
            fontFamily: "SourceSansProSemiBold",
            fontSize: 16,
        }
    }
})