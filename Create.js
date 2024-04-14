import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
            <Text style={styles.label}>Test Title:</Text>
            <TextInput
                style={styles.input}
                value={testTitle}
                onChangeText={setTestTitle}
            />

            <Text style={styles.label}>Question:</Text>
            <TextInput
                style={styles.input}
                value={question}
                onChangeText={setQuestion}
            />

            <Text style={styles.label}>Correct Answer:</Text>
            <TextInput
                style={styles.input}
                value={correctAnswer}
                onChangeText={setCorrectAnswer}
            />
               <Text style={styles.label}>Wrong Answer 1:</Text>
            <TextInput
                style={styles.input}
                value={wrongAnswer1}
                onChangeText={setWrongAnswer1}
            /> <Text style={styles.label}>Wrong Answer 2:</Text>
            <TextInput
                style={styles.input}
                value={wrongAnswer2}
                onChangeText={setWrongAnswer2}
            /> <Text style={styles.label}>Wrong Answer 3:</Text>
         <TextInput
                style={styles.input}
                value={wrongAnswer3}
                onChangeText={setWrongAnswer3}
            /> 

            {/* Similar structure for incorrect answers */}

            <Button
                title="Save Test"
                onPress={saveTest}
                color="#2196F3"
                style={styles.button}
            />
            <Button
                title="Delete All Tests"
                onPress={deleteAllTests}
                color="red"
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        padding: 10,
        margin: 10,
    },
});

export default CreateScreen;
