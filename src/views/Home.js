import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/base/Input";
import { TextInput } from "@react-native-material/core";
import React, { useState } from "react";

export const Home = () => {
    const [text, setText] = useState("");
    return (
        <Wrapper>
            <TextInput
                variant='outlined'
                label='Label'
                value={text}
                onChangeText={setText}
                style={{ margin: 16 }}
            />
        </Wrapper>
    );
};
