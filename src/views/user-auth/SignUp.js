import { Wrapper } from "../../components/Wrapper";
import { Image } from "react-native";
import { Heading } from "../../components/typography/Heading";
import { Input } from "../../components/base/Input";
import { Button } from "../../components/base/Button";
import API from "../../requests";
import { useState } from "react";

export const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const signUpHandler = async () => {
        const {data} = API.post("auth/registration/", {email, password1, password2});
        navigation.navigate("root")
    }

    return (
        <Wrapper alignItems='center' justifyContent='center'>
            <Image
                source={require("../../../assets/img/signup.png")}
                style={{ maxWidth: "100%", height: 180, resizeMode: "contain" }}
            />
            <Heading marginTop={58}>Zarejestruj się</Heading>
            <Input
                marginTop={76}
                placeholder='Email'
                secure={false}
                autoComplete='email'
                value={email}
                setValue={setEmail}
            />
            <Input
                marginTop={14}
                placeholder='Hasło'
                secure={true}
                autoComplete='password-new'
                value={password1}
                setValue={setPassword1}
            />
            <Input
                marginTop={14}
                placeholder='Hasło'
                secure={true}
                autoComplete='password-new'
                value={password2}
                setValue={setPassword2}
            />
            <Button marginTop={60} onPress={signUpHandler}>Zarejestruj się</Button>
        </Wrapper>
    );
};
