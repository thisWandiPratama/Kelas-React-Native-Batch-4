import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native"

const Header = ({ title, back }) => {
    return (
        <View style={{
            width: "100%",
            height: 60,
            backgroundColor: "#65CB96",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <TouchableOpacity
                onPress={() => back()}
            >
                <Image
                    source={{
                        uri: "https://i.ibb.co/NZ9gh9B/left-arrow-1.png"
                    }}
                    style={{
                        height: 50,
                        width: 50,
                        marginLeft: 20
                    }}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20 }}>
                {title}
            </Text>
        </View>
    )
}

export default Header