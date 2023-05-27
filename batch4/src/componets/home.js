import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Ini Home Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={{ height: 50, width: "50%", backgroundColor: "red", marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Lihat Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("DetailProduct")}
                style={{ height: 50, width: "50%", backgroundColor: "red", marginTop: 20, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Lihat Detail Produk</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen