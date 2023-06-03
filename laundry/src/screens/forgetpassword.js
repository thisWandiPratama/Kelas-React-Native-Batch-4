import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Header from '../componets/header'

class Forgetpassword extends React.Component {
    back = () => this.props.navigation.goBack()
    render() {
        return (
            <View style={{ flex: 1, marginTop: 30, backgroundColor: "#fff" }}>
                <Header
                    title="Lupa Password"
                    back={this.back}
                />
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: "80%", alignItems: "center" }}>
                        <Text style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>Temukan Akun Anda</Text>
                        <Text style={{ color: "#aeaeae", fontSize: 14, textAlign: "center", marginTop: 20, marginBottom: 20 }} >Masukan alamat email yang terhubung dengan akun anda</Text>
                        <TextInput
                            placeholder='Masukan email anda'
                            style={{
                                height: 50,
                                width: "100%",
                                backgroundColor: "#EBEBEB",
                                paddingLeft: 20,
                                borderRadius: 20,
                                borderWidth: 0.5,
                                borderColor: "#aeaeae",
                                marginBottom: 50
                            }}
                        />
                        <TouchableOpacity 
                        onPress={() => alert("Ini screen lupa password")}
                        style={{
                            height: 50, width: "40%", backgroundColor: "#6AC99D", alignItems: 'center', justifyContent: "center", borderRadius: 30, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                        }}>
                            <Text style={{color:"#fff", fontSize: 18, fontWeight:"bold"}}>Lanjutkan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Forgetpassword