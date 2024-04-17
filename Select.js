import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <Text style={styles.flagText}>HSK-1</Text>      
      {tests.map((test) => (          
        <TouchableOpacity         
          key={test.title}   // Unique key is crucial for rendering          
          style={styles.button}        
          onPress={() => navigation.navigate('TestDetails', { test })}        
        >          
          <Text style={styles.buttonText}>{test.title}</Text>
        </TouchableOpacity>      
      ))}    
    </View>  
  );
};  

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
    backgroundColor: '#FFDE00', // Yellow shade for selection button, same as flag text
  },  
  buttonText: {    
    color: '#000', // Dark text for contrast   
    fontSize: 18,  
  },
});  
export default SelectScreen;