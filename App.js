import * as React from 'react';
import {Navigation} from './assets/src/components/base/navigation/Navigation'
import {Login} from "./assets/src/views/Login";
import {Wrapper} from "./assets/src/components/Wrapper";
import {useState} from "react";
import { TextInput } from "@react-native-material/core";
import TextInputExample from "./assets/src/components/base/Input";


export default function App() {

    const [text,setText] = useState("")

    return (
        <TextInput label="Label" style={{ margin: 16,
        marginTop: 120}} />
     )
}