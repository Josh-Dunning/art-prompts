import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.unlockAsync();

import TheMainView from "./views/TheMainView";

const whoPrompts = require('./assets/prompts/who');
const whatPrompts = require('./assets/prompts/what');
const wherePrompts = require('./assets/prompts/where');

export default class App extends React.PureComponent {
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  render() {
    return (
        <View style={styles.container}>
          <TheMainView prompts={{who: whoPrompts, what: whatPrompts, where: wherePrompts}}>
          </TheMainView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
