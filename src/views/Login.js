import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/base/Input";
import { BasicButton } from "../components/base/BasicButton";
import { BasicLink } from "../components/base/BasicLink";
import { Heading } from "../components/typography/Heading";

export const Login = (props) => {
    return (
        <Wrapper>
            <Image style={{resizeMode: 'contain', height: 220}} source={require('../../assets/icons/login/signin.png')} />
            <Heading>Zaloguj się</Heading>
            <Input placeholder='Email' />
            <Input placeholder='Hasło' />
            <BasicLink>Zapomniałeś hasła?</BasicLink>
            <BasicButton
                onPress={props.loginSetter}
                accessibilityLabel='Learn more about this purple button'
            >
                Zaloguj się
            </BasicButton>
        </Wrapper>
    );
};
