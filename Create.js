import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateScreen = ({ navigation }) => {
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [wrongAnswer1, setWrongAnswer1] = useState('');
    const [wrongAnswer2, setWrongAnswer2] = useState('');
    const [wrongAnswer3, setWrongAnswer3] = useState('');

    // Function to save test to local storage
    const saveTest = async () => { 
        try {
            const newTest = {
              question,
              answers: [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3],
              // You can add a timestamp or a unique ID if needed
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

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your question"
                value={question}
                onChangeText={setQuestion}
            />
              <TextInput
                style={styles.input}
                placeholder="Enter your correct answer"
                value={correctAnswer}
                onChangeText={setCorrectAnswer}
            />
              <TextInput
                style={styles.input}
                placeholder="Enter your incorrect answer"
                value={wrongAnswer1}
                onChangeText={setWrongAnswer1}
            />
              <TextInput
                style={styles.input}
                placeholder="Enter incorrect answer"
                value={wrongAnswer2}
                onChangeText={setWrongAnswer2}
            />
              <TextInput
                style={styles.input}
                placeholder="Enter incorrect answer"
                value={wrongAnswer3}
                onChangeText={setWrongAnswer3}
            />
            {/* ... Similar TextInputs for the answers */}
            <Button title="Save Test" onPress={saveTest} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF', // Light blue background
      alignItems: 'center',
      justifyContent: 'center'
    },
    question: {
      fontSize: 24,
      textAlign: 'center', 
      marginBottom: 30,
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
    },
    option: {
      backgroundColor: '#eee', // Light grey
      padding: 20,
      margin: 10,
      borderRadius: 10,
      width: '45%',
      alignItems: 'center', 
    },
    optionText: {
      fontSize: 18,
    },
    selected: { // Indicate selected option, you can modify this
      backgroundColor: 'lightblue',
    },
  });
export default CreateScreen;