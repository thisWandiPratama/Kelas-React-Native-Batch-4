import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/componets/login';
import HomeScreen from './src/componets/home';
import ProfileScreen from './src/componets/profile';
import DetailProduct from "./src/componets/detailProduct"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

































































// import React from "react";
// import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ToastAndroid, ActivityIndicator, Alert, Dimensions, Linking, StatusBar } from "react-native"
// import Header from "./src/componets/header"



// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       biodataSiswa: {
//         nama: "wandi",
//         alamat: "prabumulih",
//         skill: "React Native Developer"
//       },
//       counter: 0,
//       phone: ["345345", "3454353", "5345345345", "r8395893"],
//       loading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         loading: false
//       })
//     }, 3000);
//   }

//   Min = () => {
//     if (this.state.counter == 0) {
//       ToastAndroid.show("Bilangan sudah batas akhir terkecil", ToastAndroid.SHORT)
//     } else {
//       this.setState({ counter: this.state.counter - 1 })
//     }
//   }

//   Add = () => {
//     if (this.state.counter == 10) {
//       ToastAndroid.show("Bilangan sudah batas akhir terbesar", ToastAndroid.SHORT)
//     } else {
//       this.setState({ counter: this.state.counter + 1 })
//     }
//   }

//   renderPhone = () => {
//     // Alert.alert("Peringatan", "INi text content")
//     return this.state.phone.map((value, index) => {
//       return (
//         <Text style={{ fontSize: 30 }}> Phone ke-{index + 1} adalah {value}</Text>
//       )
//     })
//   }

//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         marginTop: 30
//       }}>
//         <StatusBar backgroundColor={"green"} />
//         <Text style={{ fontSize: 30 }}>Nama : {this.state.biodataSiswa.nama} </Text>
//         <Text style={{ fontSize: 30 }}>Alamat : {this.state.biodataSiswa.alamat} </Text>
//         <Text style={{ fontSize: 30 }}>Skil : {this.state.biodataSiswa.skill} </Text>

//         <View style={{ alignSelf: "center" }}>
//           <TouchableOpacity
//             onPress={() => this.Min()}
//           >
//             <Text style={{ fontSize: 30 }}>-</Text>
//           </TouchableOpacity>
//           <Text style={{ fontSize: 30 }}>{this.state.counter}</Text>
//           <TouchableOpacity
//             onPress={() => this.Add()}
//           >
//             <Text style={{ fontSize: 30 }}>+</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{ alignSelf: "center", marginTop: 30 }}>
//           {
//             this.state.loading == true ?
//               <ActivityIndicator size={"large"} color={"red"} />
//               :
//               this.renderPhone()
//           }

//           <Text style={{ fontSize: 30 }}>Tinggi Layar : {Dimensions.get("window").height} </Text>
//           <Text style={{ fontSize: 30 }}>Lebar Layar : {Dimensions.get("window").width} </Text>
//         </View>

//         <TouchableOpacity
//           onPress={() => Linking.openURL("https://www.reactnative.dev/")}

//           style={{ alignSelf: "center", marginTop: 20 }}>
//           <Text style={{ fontSize: 30 }}>Web kami </Text>
//         </TouchableOpacity>

//         <Header title={"Screen App"} />
//         <Header title={"Kiloan"} />
//         <Header title={"Satuan"} />
     

//       </View >
//     )
//   }
// }
// export default App