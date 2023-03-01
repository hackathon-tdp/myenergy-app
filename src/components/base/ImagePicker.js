import { useState } from "react";
import { StyleSheet, Pressable, Image, Text, View } from "react-native";
import * as ExpoImagePicker from "expo-image-picker";
import Icon from "./Icon";

export const ImagePicker = ({ marginTop, placeholder, width, icon }) => {
    const [status, requestPermission] =
        ExpoImagePicker.useMediaLibraryPermissions();
    const [image, setImage] = useState(null);

    const styles = StyleSheet.create({
        container: {
            width: width!=null? width : "100%",
            justifyContent: "center",
            backgroundColor: "#F4F6F9",
            minHeight: 48,
            borderRadius: 5,
            paddingRight: image != null ? undefined : 70,
            paddingHorizontal: 16,
            paddingVertical: 12,

            marginTop: marginTop,
        },

        icon: {
            position: "absolute",
            right: 0,
            paddingHorizontal: 48,
            width: 24,
            height: 24,
        },
        text: {
            fontSize: 16,
            color: "#09101D",
            fontFamily: "Sen",
        },
    });

    async function takeImageHandler() {
        requestPermission();

        if (status != null) {
            setImage(
                await ExpoImagePicker.launchImageLibraryAsync({
                    mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 0.5,
                })
            );
        }
    }

    return (
        <Pressable style={styles.container} onPress={takeImageHandler}>
            {image != null ? (
                <Image
                    source={image}
                    style={{
                        width: "100%",
                        height: undefined,
                        aspectRatio: 4 / 3,
                        resizeMode: "contain",
                    }}
                />
            ) : (
                <>
                    <Text style={styles.text}>{placeholder}</Text>
                    <View style={styles.icon}>
                        <Icon type='photo' color='#000' />
                    </View>
                </>
            )}
        </Pressable>
    );
};