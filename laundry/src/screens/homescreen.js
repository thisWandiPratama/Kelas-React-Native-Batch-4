import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

class Homescreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 30, backgroundColor: "#fff" }}>
                <ScrollView>

                    {/* Blok 1 */}
                    <View style={{ height: 260, width: "100%", backgroundColor: "#E0F7EF", borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={{ height: 100, width: 200, resizeMode: "contain", marginLeft: 20 }}
                        />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ color: "#000", fontSize: 20 }}>Selamat Datang, </Text>
                            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>Wandi Pratma</Text>
                        </View>
                        <Image
                            source={require("../assets/delivery.png")}
                            style={{
                                height: 200,
                                width: 200,
                                resizeMode: "contain",
                                position: "absolute",
                                right: 0,
                                bottom: 0
                            }}
                        />
                    </View>

                    {/* Blok 2 */}
                    <View style={{ height: 400, width: "100%", backgroundColor: "#fff" }}>
                        <View style={{
                            height: 130,
                            width: "100%",
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: -50,
                            alignItems: 'center',
                            justifyContent: "center",
                        }}>
                            <View style={{
                                height: 130,
                                width: "80%",
                                backgroundColor: "#fff",
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.23,
                                shadowRadius: 2.62,

                                elevation: 4,
                                borderRadius: 20
                            }}>
                                <Text>Card</Text>
                            </View>
                        </View>
                    </View>
                    
                    {/* Blok 3 */}
                    <View style={{ height: 400, width: "100%", backgroundColor: "#F6F6F6" }}>
                            <Text style={{fontSize:30}}>{Dimensions.get("screen").height}</Text>
                            <Text style={{fontSize:30}}>{Dimensions.get("screen").width}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Homescreen