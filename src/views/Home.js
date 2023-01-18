import { Wrapper } from "../components/Wrapper";
import { TextInput } from "react-native";
import { TextInputExample } from "../components/base/Input";
import React, { useState } from "react";

export const Home = () => {
    const [text, setText] = useState("");
    return (
        <Wrapper>
            <TextInputExample />
        </Wrapper>
    );
};
