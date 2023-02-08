import {
    Modal,
    StyleSheet,
    Text,
    View,
    Pressable,
    SafeAreaView,
} from "react-native";
import { BlurView } from "expo-blur";
import { Wrapper } from "../components/Wrapper";
import { useState } from "react";
import { Button } from "../components/base/Button";
import { InlineBox } from "../components/base/InlineBox";

export const AddDevice = ({ navigation, visible, toggle }) => {
    const styles = StyleSheet.create({
        modal: {
            flex: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundColor: "#eeeeee",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 35,
        },
    });

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                toggle(!visible);
            }}
        >
            <View style={styles.modal}>
                <Wrapper backgroundColor='transparent'>
                    <InlineBox type='space-between'>
                        <Button onPress={() => toggle(!visible)}>Anuluj</Button>
                        <Button
                            onPress={() => toggle(!visible)}
                            type='inactive'
                        >
                            Dalej
                        </Button>
                    </InlineBox>
                </Wrapper>
            </View>
        </Modal>
    );
};
