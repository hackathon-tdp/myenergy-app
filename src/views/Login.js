import { StyleSheet, Text, View, Button } from "react-native";
import { Wrapper } from "../components/Wrapper";

export const Login = (props) => {
    return (
        <Wrapper>
            <Button
                onPress={props.loginSetter}
                title='Log in'
                color='#841584'
                accessibilityLabel='Learn more about this purple button'
            />
        </Wrapper>
    );
};
