import { StyleSheet, Text, View, Button } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/base/Input";

export const Login = (props) => {
    return (
        <Wrapper>
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Button
                onPress={props.loginSetter}
                title='Log in'
                color='#841584'
                accessibilityLabel='Learn more about this purple button'
            />
        </Wrapper>
    );
};
