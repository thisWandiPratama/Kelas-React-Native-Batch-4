import React from 'react'
import { View, ActivityIndicator, Image, ImageBackground } from 'react-native'

class Splashscreen extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace("Loginscreen")
        }, 3000);
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 20 }}>
                <ImageBackground
                    source={require('../assets/bg.png')}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                        <Image
                            source={require('../assets/logo.png')}
                        />
                        <ActivityIndicator size={"large"} color={"#55CB95"} />
                    </View>
                </ImageBackground>

            </View>
        )
    }
}

export default Splashscreen