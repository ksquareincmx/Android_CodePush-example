import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Splash extends React.Component{

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 5000);
    }

    render(){
        return(
            <View style={splashStyle.container}>
                <Text style={splashStyle.text}>
                    Splash Screen
                </Text>
            </View>
        );
    }
};

const splashStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'blue',
        fontSize: 30,
    }
});

export {Splash};