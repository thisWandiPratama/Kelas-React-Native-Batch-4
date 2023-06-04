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
                                borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style={{ height: 120, width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <View style={{ width: "50%", paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Saldo :</Text>
                                        <Text>Antar Point : </Text>
                                    </View>
                                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rp100.000</Text>
                                        <Text style={{ color: "#55CB95", fontWeight: "bold" }}>Rp100 point</Text>
                                    </View>
                                </View>
                                <View style={{ height: 120, width: "50%", flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                                    <TouchableOpacity style={{ width: "40%", paddingLeft: 5, backgroundColor: "#E0F7EF", marginRight: 10, height: 80, borderRadius: 10, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/dollar.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Get Saldo</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: "40%", backgroundColor: "#E0F7EF", height: 80, borderRadius: 10, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/point.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Get Point</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 100, width: "100%", alignItems: "center" }}>
                            <View style={{ width: "80%", marginBottom: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Layanan Kami</Text>
                            </View>
                            <View style={{ backgroundColor: "#fff", width: "80%", height: "100%", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <View style={{ width: "30%", height: 80, alignItems: "center", justifyContent: "center", }}>
                                    <TouchableOpacity style={{ width: 80, backgroundColor: "#E0F7EF", height: 80, borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/kiloan.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Kiloan</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "30%", height: 80, alignItems: "center", justifyContent: "center", }}>
                                    <TouchableOpacity style={{ width: 80, backgroundColor: "#E0F7EF", height: 80, borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/satuan.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Satuan</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "30%", height: 80, alignItems: "center", justifyContent: "center", }}>
                                    <TouchableOpacity style={{ width: 80, backgroundColor: "#E0F7EF", height: 80, borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/vip.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>VIP</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "30%", height: 80, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                                    <TouchableOpacity style={{ width: 80, backgroundColor: "#E0F7EF", height: 80, borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/karpet.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Karpet</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "30%", height: 80, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                                    <TouchableOpacity style={{ width: 80, backgroundColor: "#E0F7EF", height: 80, borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/setrika.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Setrika Saja</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "30%", height: 80, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                                    <TouchableOpacity style={{ width: 80, backgroundColor: "#E0F7EF", height: 80, borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                        <Image
                                            source={require("../assets/setrika.png")}
                                            style={{
                                                height: 50,
                                                width: 50,
                                                resizeMode: "contain"
                                            }}
                                        />
                                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>Express</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Blok 3 */}
                    <View style={{ height: 400, width: "100%", backgroundColor: "#F6F6F6", alignItems: "center" }}>
                        <View style={{ width: "80%" }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Pesanan Aktif</Text>
                        </View>
                        <View style={{
                            height: 100, width: "80%", backgroundColor: "#fff", shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            marginTop: 10,
                            borderRadius: 5,
                            flexDirection: "row", alignItems: "center"
                        }}>

                            <View style={{ width: 80, height: 80, alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    source={require("../assets/mesincuci.png")}
                                    style={{ height: 50, width: 50, resizeMode: "contain" }}
                                />
                            </View>
                            <View style={{ height: 80, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Pesan No.982944</Text>
                                <Text style={{ fontSize: 16, fontWeight: '800', color: "#55CB95" }}>Sudah Selesai</Text>
                            </View>
                        </View>
                        <View style={{
                            height: 100, width: "80%", backgroundColor: "#fff", shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            marginTop: 10,
                            borderRadius: 5,
                            flexDirection: "row", alignItems: "center"
                        }}>

                            <View style={{ width: 80, height: 80, alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    source={require("../assets/mesincuci.png")}
                                    style={{ height: 50, width: 50, resizeMode: "contain" }}
                                />
                            </View>
                            <View style={{ height: 80, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Pesan No.000345</Text>
                                <Text style={{ fontSize: 16, fontWeight: '800', color: "red" }}>Masih dicuci</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Homescreen