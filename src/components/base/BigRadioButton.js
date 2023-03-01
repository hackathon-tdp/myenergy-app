import { Pressable, View, Text, Image } from "react-native";

export const BigRadioButton = ({
    value,
    option,
    setOption,
    title,
    image
}) => {
    return (
        <Pressable
            onPress={() => setOption(value)}
            style={{
                borderColor: value === option ? "#009973" : "#cccccc",
                borderRadius: 10,
                borderWidth: 2,
                backgroundColor: "#ffffff",
                paddingHorizontal: 28,
                marginTop: 10,
                height: 115,
                flexDirection: "row",
            }}
        >
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 24, fontFamily: "SenBold" }}>
                    {title}
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-end",
                }}
            >
                <Image
                    style={{
                        width: 120,
                        height: 80,
                        resizeMode: "contain",
                    }}
                    source={image}
                />
            </View>
        </Pressable>
    );
};