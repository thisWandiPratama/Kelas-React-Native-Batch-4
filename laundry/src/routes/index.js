import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Splashscreen from "../screens/splashscreen";
import Loginscreen from "../screens/loginscreen";
import Registerscreen from "../screens/registerscreen";
import Forgetpassword from "../screens/forgetpassword";
import Homescreen from "../screens/homescreen";

const Routeindex = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splashscreen" component={Splashscreen} />
            <Stack.Screen name="Loginscreen" component={Loginscreen} />
            <Stack.Screen name="Registerscreen" component={Registerscreen} />
            <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
            <Stack.Screen name="Homescreen" component={Homescreen} />
        </Stack.Navigator>)
}
export default Routeindex