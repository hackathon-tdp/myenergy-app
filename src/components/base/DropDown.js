import DropDownPicker from "react-native-dropdown-picker";
import React, {useState} from "react";
import {StyleSheet} from "react-native";

const DropDown = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{label: 'AGD', value: 'agd'}, {label: 'RTV', value: 'rtv'}, {
        label: 'Fridge', value: 'fridge'
    }]);
    return (
        <DropDownPicker
            style={styles.input}
            containerStyle={styles.container
            }
            modalContentContainerStyle={{
                backgroundColor: "red"
            }}
            dropDownContainerStyle={{
                backgroundColor: "#F4F6F9",
                borderColor: "#fff",
            }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
            showTickIcon={false}
            selectedItemContainerStyle={{
                backgroundColor: "#009973",

            }}
            selectedItemLabelStyle={{
                fontWeight: "bold",
                color: "#fff"
            }}
            listItemContainer={{
                borderColor: '#fff',
            }}
    />)
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: "#F4F6F9",
        fontSize: 16,
        height: 48,
        borderRadius: 5,
        paddingHorizontal: 16,
        borderColor: "#ffffff"
    },
    container: {
        width: "100%",
        justifyContent: "center",
    },
});


export default DropDown