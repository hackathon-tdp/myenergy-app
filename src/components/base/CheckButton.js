import { Pressable, Text, View } from "react-native";
import { InlineBox } from "./InlineBox";

export const CheckButton = ({ title, value, option, setOption, full }) => {
    const checkArrays = (a, b) => {
        return (
            a.length === b.length && a.every((val, index) => val === b[index])
        );
    };

    const sortDaysOfTheWeek = (a, b) => {
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        return days.indexOf(a) - days.indexOf(b);
    }

    return (
        <Pressable
            style={{
                backgroundColor: "#ffffff",
                borderRadius: 6,
                width: "48%",
                height: 48,
                justifyContent: "center",
                padding: 16,
            }}
            onPress={() => {
                if (value === "all") {
                    if (!checkArrays(option.sort(sortDaysOfTheWeek), full.sort(sortDaysOfTheWeek))) {
                        setOption(full);
                    } else {
                        setOption([]);
                    }
                } else {
                    if (!option?.includes(value)) {
                        setOption([value, ...option]);
                    } else {
                        setOption((current) =>
                            current.filter((o) => o != value)
                        );
                    }
                }
            }}
        >
            <InlineBox type='space-between'>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: "SenBold",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {title}
                </Text>
                <View
                    style={{
                        width: 18,
                        height: 18,
                        borderWidth: 2,
                        borderRadius: 9,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {(value === "all" &&
                        checkArrays(option.sort(sortDaysOfTheWeek), full.sort(sortDaysOfTheWeek))) ||
                    option?.includes(value) ? (
                        <View
                            style={{
                                width: 9,
                                height: 9,
                                backgroundColor: "#00cc99",
                                borderRadius: 5,
                            }}
                        />
                    ) : null}
                </View>
            </InlineBox>
        </Pressable>
    );
};
