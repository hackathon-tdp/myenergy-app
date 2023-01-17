import * as React from 'react';
import {Navigation} from './src/components/base/navigation/Navigation'
import {Login} from "./src/views/Login";
import {Wrapper} from "./src/components/Wrapper";
import {useState} from "react";
import { TextInput } from "@react-native-material/core";
import TextInputExample from "./src/components/base/Input";


export default function App() {

    const [text,setText] = useState("")

    return (
        <>
            <TextInputExample label="Label" value={text} onChangeText={setText} placeholder='smth'/>
            <Text>{text}</Text>
        </>
    )
}