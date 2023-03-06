import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import AppContext from "../AppContext";

export const Button = ({ type = "default", marginTop, onPress, children }) => {
    const { theme } = useContext(AppContext);

    const styles =
        type === "empty"
            ? StyleSheet.create({
                  button: {
                      marginTop: marginTop,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      width: "48%",
                      borderRadius: 6,
                      maxWidth: 160,
                      borderWidth: 3,
                      borderColor: "#00cc99",
                      borderStyle: "solid",
                  },
                  text: {
                      color: "#00cc99",
                      fontFamily: "SourceSansProSemiBold",
                      fontSize: 16,
                  },
              })
            : type === "inactive"
            ? StyleSheet.create({
                  button: {
                      marginTop: marginTop,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#cccccc",
                      width: "48%",
                      borderRadius: 6,
                      maxWidth: 160,
                      borderWidth: 3,
                      borderColor: "#cccccc",
                      borderStyle: "solid",
                  },
                  text: {
                      color: "#999999",
                      fontFamily: "SourceSansProSemiBold",
                      fontSize: 16,
                  },
              })
            : StyleSheet.create({
                  button: {
                      marginTop: marginTop,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#00cc99",
                      width: "48%",
                      borderRadius: 6,
                      maxWidth: 160,
                  },
                  text: {
                      color: "#fff",
                      fontFamily: "SourceSansProSemiBold",
                      fontSize: 16,
                  },
              });

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};
