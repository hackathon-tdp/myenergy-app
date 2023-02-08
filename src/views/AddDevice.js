import {
    Modal,
    StyleSheet,
    Text,
    View,
    Pressable,
    SafeAreaView,
    Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { Heading } from "../components/typography/Heading";
import { Button } from "../components/base/Button";
import { InlineBox } from "../components/base/InlineBox";

const RadioButton = ({ value, option, setOption, title, image, onPress }) => {
    return (
        <Pressable
            onPress={()=>setOption(value)}
            style={{
                borderColor: value===option ? "#009973" : "#cccccc",
                borderRadius: 10,
                borderWidth: 2,
                backgroundColor: "#ffffff",
                paddingHorizontal: 28,
                marginTop: 10,
                height: 115,
                flexDirection: "row",
            }}
        >
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 24, fontFamily: "SenBold" }}>
                    {title}
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-end",
                }}
            >
                <Image
                    style={{
                        width: 120,
                        height: 80,
                        resizeMode: "contain",
                    }}
                    source={image}
                />
            </View>
        </Pressable>
    );
};

const ChooseCategory = ({option, setOption}) => {
    return (
        <View style={{ paddingVertical: 40 }}>
            <RadioButton
                value={1}
                option={option}
                setOption={setOption}
                title='Dodaj nową lokalizację'
                image={require("../../assets/img/addlocalisation.png")}
            />
            <RadioButton
                value={2}
                option={option}
                setOption={setOption}
                title='Dodaj nowy pokój'
                image={require("../../assets/img/addroom.png")}
            />
            <RadioButton
                value={3}
                option={option}
                setOption={setOption}
                title='Dodaj nowe urządzenie'
                image={require("../../assets/img/adddevice.png")}
            />
        </View>
    );
};

export const AddDevice = ({ navigation, visible, toggle }) => {
    const [option, setOption] = useState(0);

    const styles = StyleSheet.create({
        modal: {
            flex: 1,
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundColor: "#eeeeee",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 35,
        },
    });

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                toggle(!visible); setOption(0);
            }}
        >
            <View style={styles.modal}>
                <Wrapper backgroundColor='transparent'>
                    <ChooseCategory option={option} setOption={setOption} />
                    <InlineBox type='space-between'>
                        <Button onPress={() => {toggle(!visible); setOption(0)}}>Anuluj</Button>
                        <Button
                            onPress={() => {toggle(!visible); setOption(0)}}
                            type={option!=0 ? 'default' : 'inactive'}
                        >
                            Dalej
                        </Button>
                    </InlineBox>
                </Wrapper>
            </View>
        </Modal>
    );
};
