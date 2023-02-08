import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/base/Button";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Description } from "../../components/typography/Description";
import { Heading } from "../../components/typography/Heading";
import { InlineBox } from "../../components/base/InlineBox";
import { createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Welcome = ({ navigation }) => {
    return (
        <Wrapper justifyContent={"flex-end"} paddingBottom={120}>
            <Image
                source={require("../../../assets/img/welcome.png")}
                style={{ maxWidth: "100%", height: 300, resizeMode: "contain" }}
            />
            <Heading marginTop={64}>Witaj w myEnergy</Heading>
            <Description marginTop={12}>
                Zaloguj się lub utwórz konto, aby kontynuować
            </Description>
            <InlineBox marginTop={32} type='space-between'>
                <Button
                    onPress={() => {
                        navigation.navigate("login");
                    }}
                >
                    Zaloguj się
                </Button>
                <Button
                    onPress={() => {
                        navigation.navigate("signUp");
                    }}
                    isFilled={false}
                >
                    Zarejestruj się
                </Button>
            </InlineBox>
        </Wrapper>
    );
};

export default Welcome;
