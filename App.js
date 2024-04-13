import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectScreen from './Select';
import CreateScreen from './Create';
import { useNavigation } from '@react-navigation/native';
import Test1Screen from './Test1';
const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }) => { // receive the navigation prop
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HSK-1</Text>
      <Button
        title="Select Test"
        onPress={() => navigation.navigate('Select')} // navigate to Select on press
      />
      <Button
        title="Create Test"
        onPress={() => navigation.navigate('Create')}
      />
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
        <Stack.Screen name="Test1" component={Test1Screen} /> 

     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
});