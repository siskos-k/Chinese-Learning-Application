import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons'; // Import for the X icon

const TestDetailsScreen = ({ route }) => {
  const { test } = route.params;
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupColor, setPopupColor] = useState('lightgray'); // Default color

  const handleClosePopup = () => {
    setShowPopup(false);
  }
  
  const checkAnswer = (answer) => {
    setSelected(answer);

    if (answer === test.correctAnswer) {
      setPopupMessage('Correct!');
      setPopupColor('green');
    } else {
      setPopupMessage(`Incorrect. The correct answer is: ${test.correctAnswer}`);
      setPopupColor('red');
    }

    setShowPopup(true); // Show popup for both correct and incorrect
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{test.question}</Text>
      <View style={styles.optionsContainer}>
        {test.answers.map((answer, index) => (
          <TouchableHighlight
            key={index} // Use the index as the key for better performance
            style={[styles.option, selected === answer ? styles.selected : null]}
            onPress={() => checkAnswer(answer)}
          >
            <Text style={styles.optionText}>{answer}</Text>
          </TouchableHighlight>
        ))}
      </View>
      {showPopup && (
        <View style={styles.modalOverlay}>
          <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
          <View style={[styles.popup, { backgroundColor: popupColor }]}>
            <Text style={styles.popupText}>{popupMessage}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
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
  selected: {
    backgroundColor: 'lightblue',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    position: 'absolute', // For the React Native modal
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, {translateY: '-50%' }],
  },
  popupText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  closeButton: {
    color: 'blue',
    textAlign: 'center'
  },
  modalOverlay: {
    position: 'absolute',
    top: 100, 
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // Remove the background color
  },
  popup: {
    padding: 20,
    borderRadius: 10,
    width: '80%', // Wider popup
  },
  popupText: {
    fontSize: 20,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
});

export default TestDetailsScreen;