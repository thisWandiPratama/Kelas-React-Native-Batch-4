import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

class Loginscreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 20, backgroundColor: "#D1EAE1", alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: "80%", height: 200, alignItems: "center" }}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{ height: 200, width: 200, resizeMode: "contain" }}
                    />
                </View>
                <View style={{ width: "80%", height: 250, alignItems: "center", marginTop: 50 }}>
                    <TextInput
                        placeholder='Email'
                        style={{
                            height: 50,
                            width: "100%",
                            backgroundColor: "white",
                            paddingLeft: 10, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,

                            elevation: 4,
                            borderRadius: 20,
                            marginBottom: 10
                        }}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        style={{
                            height: 50,
                            width: "100%",
                            backgroundColor: "white",
                            paddingLeft: 10, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,

                            elevation: 4,
                            borderRadius: 20,
                            marginBottom: 10
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.replace("Homescreen")}
                        style={{
                            height: 50, width: "40%", backgroundColor: "#66C79B", alignItems: "center", justifyContent: "center", borderRadius: 30, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,

                            elevation: 4,
                            marginTop: 20
                        }}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Forgetpassword")}
                        style={{ marginTop: 10, height: 40 }}>
                        <Text style={{ color: "rgba(0,0,0,0.8)" }}>Lupa password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 50, width: "100%", flexDirection: "row", position: "absolute", bottom: 0, left: 20 }}>
                    <Text>Saya belum punya akun, </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Registerscreen")}
                    >
                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 14 }}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Loginscreen