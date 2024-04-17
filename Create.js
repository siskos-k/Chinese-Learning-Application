import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateScreen = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer1, setWrongAnswer1] = useState('');
  const [wrongAnswer2, setWrongAnswer2] = useState('');
  const [wrongAnswer3, setWrongAnswer3] = useState('');
  const [testTitle, setTestTitle] = useState('');

  // Function to save test to local storage
  const saveTest = async () => {
    try {
      const newTest = {
        title: testTitle,
        question,
        correctAnswer, // Destructure the state
        answers: [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3],
      };

      // Get existing tests (if any)
      const existingTests = await AsyncStorage.getItem('tests') || '[]'; 
      const updatedTests = JSON.stringify([...JSON.parse(existingTests), newTest]); 
      await AsyncStorage.setItem('tests', updatedTests); 
      console.log('Test saved successfully!');
    } catch (error) {
      console.error('Error saving test:', error); 
    } 
  }; 

  const deleteAllTests = async () => { 
    try {
      await AsyncStorage.removeItem('tests'); 
      console.log('All tests deleted successfully!'); 
    } catch (error) { 
      console.error('Error deleting tests:', error);  
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.flagText}>HSK-1</Text>
      <TextInput
        style={styles.input}
        value={testTitle}
        onChangeText={setTestTitle}
        placeholder="Test Title"
      />
      <Text style={styles.label}>Question:</Text>
      <TextInput
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
        placeholder="Question" 
      />        <Text style={styles.label}>Correct Answer:</Text> 
      <TextInput
        style={styles.input}
        value={correctAnswer}
        onChangeText={setCorrectAnswer}
        placeholder="Correct Answer" 
      />      <Text style={styles.label}>Wrong Answer 1:</Text> 
      <TextInput
        style={styles.input}  
        value={wrongAnswer1}
        onChangeText={setWrongAnswer1}
        placeholder="Wrong Answer 1"  
      />  
      <Text style={styles.label}>Wrong Answer 2:</Text> 
      <TextInput     style={styles.input}     
        value={wrongAnswer2}     onChangeText={setWrongAnswer2}      placeholder="Wrong Answer 2"    
      />    <Text style={styles.label}>Wrong Answer 3:</Text>  
      <TextInput
        style={styles.input}  
        value={wrongAnswer3}  
        onChangeText={setWrongAnswer3} 
        placeholder="Wrong Answer 3"   
      />   

   {/* Similar structure for incorrect answers */} 

      <TouchableOpacity  
        style={[styles.button, styles.createButton]}      
        onPress={saveTest}          
      >  
        <Text style={styles.buttonText}>Save Test</Text>  
      </TouchableOpacity>  
      <TouchableOpacity      
        style={[styles.button, styles.selectButton]}     
        onPress={deleteAllTests}          
      >    
        <Text style={styles.buttonText}>Delete All Tests</Text>    
      </TouchableOpacity>   
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
  input: {    
    borderWidth: 1,    
    borderColor: '#ccc',    
    padding: 10,    
    borderRadius: 5,    
    marginBottom: 10,    
    width: '80%',    
    alignSelf: 'center',  
  },
  label: {    
    fontSize: 16,    
    marginBottom: 5,    
    marginTop: 15,    
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
export default CreateScreen;