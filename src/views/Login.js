import { StyleSheet, Text, View, Button } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/base/Input";

export const Login = (props) => {
    return (
        <Wrapper>
            <Input placeholder='pow' secure={false} icon={"power"} />
            <Input placeholder='pow' secure={false} icon={"power"} />
            <Input placeholder='pow' secure={false} icon={"power"} />
        </Wrapper>
    );
};
