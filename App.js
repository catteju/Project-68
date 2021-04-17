import React from 'react';
import Fb from './screens/Fb.js';
import Insta from './screens/Insta.js';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { View, StyleSheet,Text } from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <View style = {styles.container}>
            <Text> BUZZ APP </Text>
            </View>
        <AppContainer/>
      </View>

    );
  }
}

const tabNavigator = createBottomTabNavigator({
  Facebook : {screen : Fb},
  Instagram : {screen : Insta}
})

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    color : 'blue',
    fontWeight : 'bold'
  },
})