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
import { Input } from "../components/base/Input";
import { ImagePicker } from "../components/base/ImagePicker";
import { BigRadioButton } from "../components/base/BigRadioButton";
import { CheckButton } from "../components/base/CheckButton";

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

const AddNewLocalisation = ({}) => {
    return (
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
            <Heading>Dodaj nową lokalizację</Heading>
            <Description marginTop={20} textAlign='center'>
                Dzięki lokalizacjom jesteś w stanie z łatwością grupować
                pomieszczenia
            </Description>
            <Input marginTop={38} placeholder='Nazwa lokalizacji' />
            <ImagePicker
                marginTop={18}
                placeholder='Wybierz zdjęcie'
                icon='photo'
            />
        </View>
    );
};

const AddNewRoom = () => {
    return (
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
            <Heading>Dodaj nowy pokój</Heading>
            <Description marginTop={20} textAlign='center'>
                Dzięki pokojom, jesteś w stanie grupować swoje urządzenia
            </Description>
            {/* DROPDOWN HERE */}
            <Input marginTop={38} placeholder='Lokalizacja pokoju' />
            {/* DROPDOWN HERE */}
            <Input marginTop={18} placeholder='Nazwa pokoju' />
            <ImagePicker
                marginTop={18}
                placeholder='Wybierz zdjęcie'
                icon='photo'
            />
        </View>
    );
};

const AddNewDevice = () => {
    return (
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
            <Heading>Dodaj nowe urządzenie</Heading>
            <Description marginTop={20} textAlign='center'>
                Dodaj urządzenie, by wiedzieć ile prądu zużywa w praktyce
            </Description>
            <Input marginTop={38} placeholder='Nazwa urządzenia' />
            <Input marginTop={18} placeholder='Nazwa lokalizacji' />
            <Input marginTop={18} placeholder='Nazwa pokoju' />
            <InlineBox type='space-between' marginTop={18}>
                <ImagePicker placeholder='Zdjęcie' icon='photo' width='48%' />
                <Input
                    placeholder='Moc'
                    keyboardType='numeric'
                    icon='power'
                    width='48%'
                />
            </InlineBox>
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
    const [localisationName, setLocalisationName] = useState("");
    // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const [days, setDays] = useState([]);

    const isReady = () => {
        return true;
        // switch (stage) {
        //     case 0:
        //         return option !== 0;
        //     case 1:
        //         return days.length !== 0;
        //     case 2:
        //         return localisationName !== "";
        //     default:
        //         return false;
        // }
    };

    const nextStage = () => {
        if (isReady()) {
            setStage(stage + 1);
        }
    };

    const close = () => {
        toggle(!visible);
        setStage(0);
        setOption(0);
        setDays([]);
    };

    const Content = () => {
        switch (stage) {
            case 0:
                return <ChooseCategory option={option} setOption={setOption} />;
            case 1:
                return <ChooseDays days={days} setDays={setDays} />;
            case 2:
                return <AddNewDevice />;
            default:
                return null;
        }
    };

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
                close();
            }}
        >
            <View style={styles.modal}>
                <Wrapper backgroundColor='transparent'>
                    <Content />
                    <InlineBox type='space-between'>
                        <Button
                            onPress={() => {
                                close();
                            }}
                        >
                            Anuluj
                        </Button>
                        <Button
                            onPress={() => {
                                nextStage();
                            }}
                            type={isReady() ? "default" : "inactive"}
                        >
                            Dalej
                        </Button>
                    </InlineBox>
                </Wrapper>
            </View>
        </Modal>
    );
};
