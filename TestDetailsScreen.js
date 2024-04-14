import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestDetailsScreen = ({ route }) => {
  const { test } = route.params; // Receive test data from navigation prop
  const [selected, setSelected] = useState(null);
  const checkAnswer = (answer) => {
    setSelected(answer);

    if (answer === test.correctAnswer) {
        console.log('Correct Answer!');
        // You could provide visual feedback as well e.g. changing the button color to green
    } else {
        console.log('Incorrect Answer. The correct answer is: ' + test.correctAnswer);
        // You could provide visual feedback as well e.g. changing the button color to red and the correct answer to green
    }
};
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{test.question}</Text>
      <View style={styles.optionsContainer}>
        {test.answers.map((answer) => (
          <TouchableHighlight
            key={answer} // Unique key for each answer
            style={[styles.option, selected === answer ? styles.selected : null]}
            onPress={() => checkAnswer(answer)}
          >
            <Text style={styles.optionText}>{answer}</Text>
          </TouchableHighlight>
        ))}
      </View>
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
// Include your styles here

export default TestDetailsScreen;