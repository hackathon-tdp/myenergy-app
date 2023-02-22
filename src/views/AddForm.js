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
            <Input marginTop={18} placeholder='Lokalizacja urządzenia' />
            <Input marginTop={18} placeholder='Kategoria urządzenia' />
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

const ChooseHours = ({ days, hours, setHours }) => {
    const Line = ({ day, hours }) => {
        const translateDay = () => {
            switch (day) {
                case "mon":
                    return "Poniedziałek";
                case "tue":
                    return "Wtorek";
                case "wed":
                    return "Środa";
                case "thu":
                    return "Czwartek";
                case "fri":
                    return "Piątek";
                case "sat":
                    return "Sobota";
                case "sun":
                    return "Niedziela";
                default:
                    return "chuj";
            }
        };

        return (
            <InlineBox marginTop={10}>
                <View
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        height: 48,
                        flex: 1,
                        paddingHorizontal: 16,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "SourceSansProSemiBold",
                            fontSize: 16,
                            color: "#09101D",
                        }}
                    >
                        {translateDay()}
                    </Text>
                </View>
                <View
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 48,
                        width: 40,
                        marginLeft: 8,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "SourceSansProSemiBold",
                            fontSize: 16,
                            color: "#09101D",
                        }}
                    >
                        {hours[day]}
                    </Text>
                </View>
                <Pressable
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#00CC99",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 48,
                        width: 70,
                        marginLeft: 9,
                    }}
                    onPress={() => {
                        setHours((prevState) => {
                            if (prevState[day] >= 24) return prevState;
                            return {
                                ...prevState,
                                [day]: prevState[day] + 1,
                            };
                        });
                    }}
                >
                    <Image
                        source={require("../../assets/icons/form/plus.png")}
                        style={{ width: 15, height: 15, resizeMode: "contain" }}
                    />
                </Pressable>
                <Pressable
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#F48479",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 48,
                        width: 70,
                        marginLeft: 9,
                    }}
                    onPress={() => {
                        setHours((prevState) => {
                            if (prevState[day] <= 0) return prevState;
                            return {
                                ...prevState,
                                [day]: prevState[day] - 1,
                            };
                        });
                    }}
                >
                    <Image
                        source={require("../../assets/icons/form/minus.png")}
                        style={{ width: 15, height: 15, resizeMode: "contain" }}
                    />
                </Pressable>
            </InlineBox>
        );
    };

    const HourPicker = ({ marginTop }) => {
        const result = [];
        days.forEach((day) =>
            result.push(<Line day={day} hours={hours} setHours={setHours} />)
        );
        return <View style={{ marginTop: marginTop }}>{result}</View>;
    };

    return (
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
            <Heading textAlign='center'>Wybierz godziny użytkowania</Heading>
            <Description marginTop={20} textAlign='center'>
                Pozwoli to nam wygenerować bardziej precyzyjne statystyki
            </Description>
            <HourPicker marginTop={28} />
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

const FormCompleted = ({ type }) => {
    return (
        <View style={{ paddingVertical: 60, alignItems: "center" }}>
            <Image
                style={{
                    height: 190,
                    resizeMode: "contain",
                }}
                source={require("../../assets/img/completed.png")}
            />
            <Heading marginTop={35}>Dodano {type}</Heading>
            <Description marginTop={20} textAlign='center'>
                Teraz przejdź do widoku urządzeń, aby poznać staystyki
            </Description>
        </View>
    );
};

export const AddForm = ({ navigation, visible, toggle }) => {
    const [stage, setStage] = useState(0);
    const [option, setOption] = useState(0);
    const [localisationName, setLocalisationName] = useState("");
    // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const [days, setDays] = useState([]);
    const defaultHours = {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
    };
    const [hours, setHours] = useState(defaultHours);

    const isReady = () => {
        switch (stage) {
            case 0:
                return option !== 0;
            case 2:
                return option!=3 || days.length!=0;
            default:
                return true;
        }
    };

    const nextStage = () => {
        if (isReady()) {
            setStage((prevState) => prevState + 1);
        }
    };

    const close = () => {
        toggle(!visible);
        setStage(0);
        setOption(0);
        setDays([]);
        setHours(defaultHours);
    };

    const Stages = [
        [],
        [null, <AddNewLocalisation />, <FormCompleted type='lokalizację' />, null],
        [null, <AddNewRoom />, <FormCompleted type='pokój' />, null],
        [
            null,
            <AddNewDevice />,
            <ChooseDays days={days} setDays={setDays} />,
            <ChooseHours days={days} hours={hours} setHours={setHours} />,
            <FormCompleted type='urządzenie' />,
            null
        ],
    ];

    const Content = () => {
        switch (stage) {
            case 0:
                return <ChooseCategory option={option} setOption={setOption} />;
            default:
                return <>{Stages[option][stage]}</>;
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
                                if(option != 0 && Stages[option][stage+1]==null) {
                                    close();
                                } else {
                                    nextStage();
                                }
                            }}
                            type={isReady() ? "default" : "inactive"}
                        >
                            {option != 0 && Stages[option][stage+1]==null ? 'Zakończ' : 'Dalej'}
                        </Button>
                    </InlineBox>
                </Wrapper>
            </View>
        </Modal>
    );
};
