import React, { useState, useEffect } from 'react';
import {Button, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Test1Screen from './Test1'; // Import your test screen
import TestDetailsScreen from './TestDetailsScreen'; // Import your test screen

const SelectScreen = ({ navigation }) => {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    const loadTests = async () => {
      try {
        const storedTests = await AsyncStorage.getItem('tests');
        if (storedTests) {
          setTests(JSON.parse(storedTests));
        }
      } catch (error) {
        console.error('Error loading tests:', error);
      }
    };

    loadTests();
  }, []); 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select</Text>
      <Button
        title="Test-1"
        onPress={() => navigation.navigate('Test1')}
      />
        {tests.map((test) => (
        <Button
          key={test.title} // Unique key is crucial for rendering
          title={test.title}
          onPress={() => navigation.navigate('TestDetails', { test })}
        />
      ))}
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