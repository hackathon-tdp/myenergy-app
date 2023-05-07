import { Wrapper } from "../../components/Wrapper";
import { Image } from "react-native";
import { Heading } from "../../components/typography/Heading";
import { Description } from "../../components/typography/Description";
import { Button } from "../../components/base/Button";
import { Input } from "../../components/base/Input";
import { useState } from "react";
import API from "../../requests";

export const PasswordReset = ({navigation}) => {
    const [email, setEmail] = useState("");

    const passwordResetHandler = async () => {
        API.post(
            "auth/password/reset/",
            {email}
        );
        navigation.navigate("root");
    }

    return (
        <Wrapper alignItems='center' justifyContent='center'>
            <Image
                source={require("../../../assets/img/passwordreset.png")}
                style={{ maxWidth: "100%", height: 180, resizeMode: "contain" }}
            />
            <Heading marginTop={70}>Resetuj hasło</Heading>
            <Description textAlign='center' marginTop={13}>
                Wpisz swój email poniżej aby otrzymać email zresetować hasło
            </Description>
            <Input
                marginTop={47}
                placeholder='Email'
                secure={false}
                autoComplete='email'
                value={email}
                setValue={setEmail}
            />
            <Button marginTop={47} onPress={passwordResetHandler}>Wyślij</Button>
        </Wrapper>
    );
};
