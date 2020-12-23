import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TheMainView from "./views/TheMainView";

const whoPrompts = require('./assets/prompts/who');
const whatPrompts = require('./assets/prompts/what');
const wherePrompts = require('./assets/prompts/where');

export default function App() {
  return (
    <View style={styles.container}>
      <TheMainView prompts={{who: whoPrompts, what: whatPrompts, where: wherePrompts}}>
      </TheMainView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
