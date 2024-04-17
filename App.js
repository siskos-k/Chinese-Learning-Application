import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectScreen from './Select';
import CreateScreen from './Create';
import Test1Screen from './Test1';
import TestDetailsScreen from './TestDetailsScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.flagText}>HSK-1</Text>
      <TouchableOpacity
        style={[styles.button, styles.selectButton]}
        onPress={() => handleNavigate('Select')}
      >
        <Text style={styles.buttonText}>Select Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.createButton]}
        onPress={() => handleNavigate('Create')}
      >
        <Text style={styles.buttonText}>Create Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        {/* <Stack.Screen name="Test1" component={Test1Screen} /> */}
        <Stack.Screen name="TestDetails" component={TestDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0D00', // Red shade of the Chinese flag
  },
  flagText: {
    color: '#FFDE00', // Yellow shade of the Chinese flag
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: '#FFDE00', // Yellow shade
  },
  createButton: {
    backgroundColor: '#00008B', // Dark blue shade
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
