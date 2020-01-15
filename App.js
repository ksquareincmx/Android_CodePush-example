/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import codePush from 'react-native-code-push';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Splash, Home} from './screens';

let codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE
};

const SplashStack = createStackNavigator({
  Splash: {screen: Splash}
},{
  headerMode: 'none'
});

const HomeStack = createStackNavigator({
  Home: {screen: Home}
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});

const RootStack = createSwitchNavigator({
  Splash: {screen: SplashStack},
  Home: {screen: HomeStack}
},{
  initialRouteName: 'Splash',
  mode: 'modal',
  headerMode: 'none',
});

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  };
};

App = codePush(codePushOptions)(App);

export default App;
