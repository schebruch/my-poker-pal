import MenuButton from '@/components/MenuButton';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Sam!</Text>
      <Text style={styles.text}>Current Bankroll: $10,000</Text>

      <MenuButton
        title="Begin New Session!"
        onPress={() => console.log("TODO Begin new Session")}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});