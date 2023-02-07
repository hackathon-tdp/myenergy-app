import { Wrapper } from "../../components/Wrapper";
import { Image } from "react-native";
import { Heading } from "../../components/typography/Heading";
import { Description } from "../../components/typography/Description";
import { Button } from "../../components/base/Button";

export const EmailSent = () => {
    return (
        <Wrapper alignItems='center' justifyContent='center'>
            <Image
                source={require("../../../assets/img/emailsent.png")}
                style={{ maxWidth: "100%", height: 180, resizeMode: "contain" }}
            />
            <Heading marginTop={88}>Email wysłany</Heading>
            <Description textAlign='center' marginTop={13}>
                Sprawdź swoją skrzynkę odbiorczą, aby zresetować hasło
            </Description>
            
            <Button marginTop={57}>Zaloguj się</Button>
        </Wrapper>
    );
};
