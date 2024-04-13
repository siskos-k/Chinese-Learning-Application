import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Test1Screen = () => {
  const [selected, setSelected] = useState(null);

  const checkAnswer = (answer) => {
    setSelected(answer);
    if (answer === '你好') {
      console.log('You win!');
    } else {
      console.log('You lose!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How do you say 'hello' in Chinese?</Text>
      <View style={styles.optionsContainer}>
        <TouchableHighlight
          style={[styles.option, selected === '你好' ? styles.selected : null]}
          onPress={() => checkAnswer('你好')}
        >
          <Text style={styles.optionText}>你好</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected === '我很好' ? styles.selected : null]}
          onPress={() => checkAnswer('我很好')}
        >
          <Text style={styles.optionText}>我很好</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected === '你呢' ? styles.selected : null]}
          onPress={() => checkAnswer('你呢')}
        >
          <Text style={styles.optionText}>你呢</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected === '再见' ? styles.selected : null]}
          onPress={() => checkAnswer('再见')}
        >
          <Text style={styles.optionText}>再见</Text>
        </TouchableHighlight>
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
export default Test1Screen;