import React from "react";
import {View} from "react-native";
import ArrowIcon from "../Icons/Arrow";
import EmailIcon from "../Icons/Email";
import CalendarIcon from "../Icons/Calendar";
import PowerIcon from "../Icons/Power";
import ClockIcon from "../Icons/Clock";
import PhotoIcon from "../Icons/Photo";
 const Icon = (props) => {

    let icon;
    switch (props.type) {
        case "arrow":
            icon = <ArrowIcon color={props.color}/>
            break;
        case "email":
            icon = <EmailIcon color={props.color}/>
            break;
        case "calendar":
            icon = <CalendarIcon color={props.color}/>
            break;
        case "power":
            icon = <PowerIcon color={props.color} />
            break;
        case "clock":
            icon = <ClockIcon color={props.color} />
            break;
        case "photo":
            icon = <PhotoIcon color={props.color} />
            break;
        default:
            icon = null
            break;
    }

    return (
        <View style={props.style}>
            {icon}
        </View>
    )
};

 export default Icon