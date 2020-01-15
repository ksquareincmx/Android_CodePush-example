import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends React.Component {

    static navigationOptions = {
        title: 'Home'
    }

    render(){
        return(
            <View style={homeStyle.container}>
                <Text style={homeStyle.text}>
                    Main Screen
                </Text>
            </View>
        );
    }
};

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'red',
        fontSize: 30,
    }
});

export {Home};