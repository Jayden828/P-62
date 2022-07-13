import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import Homescreen from './screens/Homescreen';
import SummaryScreen from './screens/SummaryScreen';
import AppHeader from './screens/AppHeader.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader/>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  SummaryScreen:SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
