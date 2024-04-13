import React from 'react';
import {Button, View, Text, StyleSheet } from 'react-native';

import Test1Screen from './Test1'; // Import your test screen

const SelectScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select</Text>
      <Button
        title="Test-1"
        onPress={() => navigation.navigate('Test1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
  },
});

export default SelectScreen;