import { Modal, StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { BlurView } from "expo-blur";
import { Wrapper } from "../components/Wrapper";
import { useState } from "react";
import { Button } from "../components/base/Button";

export const Popup = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);

    const styles = StyleSheet.create({
        modal: {
            flex: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
        },
    
        centeredView: {
            flex: 1,
        },
        modalView: {
            backgroundColor:  navigation===null ? '#ff3333' : '#33ff33',
            borderTopLeftRadius: 20,
            borderTopRadius: 20,
            
            padding: 35,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center",
        },
    });

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};



export const AddDevice = ({navigation}) => {
    const [visible, toggleVisible] = useState(false);

    const styles = StyleSheet.create({
        container: {
            height: 200,
            width: "50%",
            backgroundColor: "#ff0000",
        },
    });

    return (
        <Popup navigation={navigation}></Popup>
    );
};
