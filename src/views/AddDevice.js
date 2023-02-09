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
import { Description } from "../components/typography/Description";
// import { launchImageLibrary } from "react-native-image-picker";

const BigRadioButton = ({
    value,
    option,
    setOption,
    title,
    image,
    onPress,
}) => {
    return (
        <Pressable
            onPress={() => setOption(value)}
            style={{
                borderColor: value === option ? "#009973" : "#cccccc",
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

const CheckButton = ({ title, value, option, setOption, full }) => {
    const Circle = () => (
        <View
            style={{
                width: 9,
                height: 9,
                backgroundColor: "#00cc99",
                borderRadius: 5,
            }}
        />
    );

    const checkArrays = (a,b) => {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }

    return (
        <Pressable
            style={{
                backgroundColor: "#ffffff",
                borderRadius: 6,
                width: "48%",
                height: 48,
                justifyContent: "center",
                padding: 16,
            }}
            onPress={() => {
                if (value === "all") {
                    if (!checkArrays(option.sort(), full.sort())) {
                        setOption(full);
                    } else {
                        setOption([]);
                    }
                } else {
                    if (!option?.includes(value)) {
                        setOption([value, ...option]);
                    } else {
                        setOption((current) =>
                            current.filter((o) => o != value)
                        );
                    }
                }
            }}
        >
            <InlineBox type='space-between'>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: "SenBold",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {title}
                </Text>
                <View
                    style={{
                        width: 18,
                        height: 18,
                        borderWidth: 2,
                        borderRadius: 9,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {(value === "all" && checkArrays(option.sort(), full.sort())) ||
                    option?.includes(value) ? (
                        <Circle />
                    ) : null}
                </View>
            </InlineBox>
        </Pressable>
    );
};

const ChooseCategory = ({ option, setOption }) => {
    return (
        <View style={{ paddingVertical: 40 }}>
            <BigRadioButton
                value={1}
                option={option}
                setOption={setOption}
                title='Dodaj nową lokalizację'
                image={require("../../assets/img/addlocalisation.png")}
            />
            <BigRadioButton
                value={2}
                option={option}
                setOption={setOption}
                title='Dodaj nowy pokój'
                image={require("../../assets/img/addroom.png")}
            />
            <BigRadioButton
                value={3}
                option={option}
                setOption={setOption}
                title='Dodaj nowe urządzenie'
                image={require("../../assets/img/adddevice.png")}
            />
        </View>
    );
};

const ChooseDays = ({ days, setDays }) => {
    return (
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
            <Heading>Wybierz aktywne dni</Heading>
            <Description textAlign='center' marginTop={20}>
                Pozwoli to nam wygenerować bardziej precyzyjne statystyki
            </Description>
            <InlineBox type='space-between' marginTop={28}>
                <CheckButton
                    title='Poniedziałek'
                    value='mon'
                    option={days}
                    setOption={setDays}
                />
                <CheckButton
                    title='Piątek'
                    value='fri'
                    option={days}
                    setOption={setDays}
                />
            </InlineBox>
            <InlineBox type='space-between' marginTop={10}>
                <CheckButton
                    title='Wtorek'
                    value='tue'
                    option={days}
                    setOption={setDays}
                />
                <CheckButton
                    title='Sobota'
                    value='sat'
                    option={days}
                    setOption={setDays}
                />
            </InlineBox>
            <InlineBox type='space-between' marginTop={10}>
                <CheckButton
                    title='Środa'
                    value='wed'
                    option={days}
                    setOption={setDays}
                />
                <CheckButton
                    title='Niedziela'
                    value='sun'
                    option={days}
                    setOption={setDays}
                />
            </InlineBox>
            <InlineBox type='space-between' marginTop={10}>
                <CheckButton
                    title='Czwartek'
                    value='thu'
                    option={days}
                    setOption={setDays}
                />
                <CheckButton
                    title='Wszystkie'
                    value='all'
                    full={["mon", "tue", "wed", "thu", "fri", "sat", "sun"]}
                    option={days}
                    setOption={setDays}
                />
            </InlineBox>
        </View>
    );
};

export const AddDevice = ({ navigation, visible, toggle }) => {
    const [stage, setStage] = useState(0);
    const [option, setOption] = useState(0);
    // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const [days, setDays] = useState([]);

    const nextStage = () => {
        setStage(stage+1);
    }

    const close = () => {
        toggle(!visible);
        setOption(0);
        setDays([]);
    }

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
                close();
            }}
        >
            <View style={styles.modal}>
                <Wrapper backgroundColor='transparent'>
                    {/* <ChooseCategory option={option} setOption={setOption} /> */}
                    <ChooseDays days={days} setDays={setDays} />
                    <InlineBox type='space-between'>
                        <Button
                            onPress={() => {
                                close();
                            }}
                        >
                            Anuluj
                        </Button>
                        <Button
                            onPress={async () => {
                                // const result = await launchImageLibrary({mediaType: 'photo' });
                            }}
                            type={(days.length==0)? 'inactive' : 'default' }
                        >
                            Dalej
                        </Button>
                    </InlineBox>
                </Wrapper>
            </View>
        </Modal>
    );
};
