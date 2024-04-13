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
            {/* ... Similar TextInputs for the answers */}
            <Button title="Save Test" onPress={saveTest} />
        </View>
    );
};

export default CreateScreen;