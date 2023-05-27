import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from "./custom/header"

function ProfileScreen({ navigation }) {
  const goback = () => navigation.goBack()
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <Header
        title="Detail Produk"
        back={goback}
      />
      <View style={{ alignSelf: "center", marginTop: 50 }}>
        <Text>Iini Halaman Detail Produk</Text>
      </View>
    </View>
  );
}
export default ProfileScreen