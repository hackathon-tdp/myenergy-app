import { Image } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/base/Input";
import { Heading } from "../components/typography/Heading";
import { Description } from "../components/typography/Description";
import { Button } from "../components/base/Button";
import { InlineBox } from "../components/base/InlineBox";
import { TextLink } from '../components/typography/TextLink'

export const Login = ({ loginSetter }) => {
    return (
        <Wrapper alignItems='center' justifyContent='center'>
            <Image
                source={require("./../../assets/img/login.png")}
                style={{ maxWidth: "100%", height: 180, resizeMode: "contain" }}
            />
            <Heading marginTop={39}>Zaloguj się</Heading>
            <InlineBox marginTop={10}>
                <Description>Nie masz konta?</Description>
                <TextLink> Zarejestruj się</TextLink>
            </InlineBox>
            <Input
                marginTop={16}
                placeholder='Email'
                secure={false}
                // icon={"email"}
                autoComplete='email'
            />
            <Input
                marginTop={13}
                placeholder='Hasło'
                secure={true}
                // icon={"power"}
                autoComplete='password'
            />
            <TextLink marginTop={13}>Zapomniałeś hasła?</TextLink>
            <Button marginTop={33} onPress={loginSetter}>Zaloguj się</Button>
        </Wrapper>
    );
};
