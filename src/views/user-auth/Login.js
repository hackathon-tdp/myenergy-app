import { Image } from "react-native";
import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/base/Input";
import { Heading } from "../../components/typography/Heading";
import { Description } from "../../components/typography/Description";
import { Button } from "../../components/base/Button";
import { InlineBox } from "../../components/base/InlineBox";
import { TextLink } from "../../components/typography/TextLink";
import API, { setHeader } from "../../requests";
import { useContext, useState } from "react";
import AppContext from "../../components/AppContext";

export const Login = ({ navigation, loginSetter }) => {
    const { setIsLoggedIn, setUser, setAccessToken, setRefreshToken } =
        useContext(AppContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async (username, password) => {
        const { data } = await API.post("auth/login/", { username, password });
        setAccessToken(data.access_token);
        setRefreshToken(data.refresh_token);
        console.log(data.user);
        setUser(data.user);
        setHeader(data.accessToken);
        setIsLoggedIn(true);
    };

    return (
        <Wrapper alignItems='center' justifyContent='center'>
            <Image
                source={require("../../../assets/img/login.png")}
                style={{ maxWidth: "100%", height: 180, resizeMode: "contain" }}
            />
            <Heading marginTop={39}>Zaloguj się</Heading>
            <InlineBox marginTop={10} type='center'>
                <Description>Nie masz konta? </Description>
                <TextLink
                    onPress={() => {
                        navigation.navigate("signUp");
                    }}
                >
                    Zarejestruj się
                </TextLink>
            </InlineBox>
            <Input
                marginTop={16}
                placeholder='Email'
                secure={false}
                // icon={"email"}
                autoComplete='email'
                value={username}
                setValue={setUsername}
            />
            <Input
                marginTop={13}
                placeholder='Hasło'
                secure={true}
                // icon={"power"}
                autoComplete='password'
                value={password}
                setValue={setPassword}
            />
            <TextLink
                marginTop={14}
                onPress={() => {
                    navigation.navigate("passwordReset");
                }}
            >
                Zapomniałeś hasła?
            </TextLink>
            <Button marginTop={18} onPress={() => signIn(username, password)}>
                Zaloguj się
            </Button>
        </Wrapper>
    );
};
