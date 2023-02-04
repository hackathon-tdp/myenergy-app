import { Wrapper } from "../components/Wrapper";
import { Image } from "react-native";
import { Heading } from "../components/typography/Heading";
import { Input } from "../components/base/Input";
import { Button } from "../components/base/Button";

export const SignUp = () => {
    return (
        <Wrapper alignItems='center' justifyContent='center'>
            <Image
                source={require("./../../assets/img/signup.png")}
                style={{ maxWidth: "100%", height: 180, resizeMode: "contain" }}
            />
            <Heading marginTop={58}>Zarejestruj się</Heading>
            <Input
                marginTop={76}
                placeholder='email'
                secure={false}
                autoComplete='email'
            />
            <Input
                marginTop={14}
                placeholder='hasło'
                secure={true}
                autoComplete='password-new'
            />
            <Input
                marginTop={14}
                placeholder='powtórz hasło'
                secure={true}
                autoComplete='password-new'
            />
            <Button marginTop={60}>Zarejestruj się</Button>
        </Wrapper>
    );
};
