import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Test1Screen = () => {
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [result, setResult] = useState('');

  const checkAnswer1 = (answer) => {
    setSelected1(answer);
    if (answer === '你好') {
      console.log('You win for Question 1!');
    } else {
      console.log('You lose for Question 1!');
    }
  };

  const checkAnswer2 = (answer) => {
    setSelected2(answer);
    if (answer === '你好') {
      console.log('You win for Question 2!');
    } else {
      console.log('You lose for Question 2!');
    }
  };

  const checkBothAnswers = () => {
    if (selected1 === '你好' && selected2 === '你好') {
      console.log('You have answered both questions correctly!');
      setResult('Congratulations! You have answered both questions correctly!');
    } else {
      console.log('You have answered at least one question incorrectly.');
      setResult('Oops! You have answered at least one question incorrectly.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How do you say 'hello' in Chinese?</Text>
      <View style={styles.optionsContainer}>
        <TouchableHighlight
          style={[styles.option, selected1 === '你好' ? styles.selected : null]}
          onPress={() => checkAnswer1('你好')}
        >
          <Text style={styles.optionText}>你好</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected1 === '我很好' ? styles.selected : null]}
          onPress={() => checkAnswer1('我很好')}
        >
          <Text style={styles.optionText}>我很好</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected1 === '你呢' ? styles.selected : null]}
          onPress={() => checkAnswer1('你呢')}
        >
          <Text style={styles.optionText}>你呢</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected1 === '再见' ? styles.selected : null]}
          onPress={() => checkAnswer1('再见')}
        >
          <Text style={styles.optionText}>再见</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.question}>How do you say 'hello' in another language?</Text>
      <View style={styles.optionsContainer}>
        <TouchableHighlight
          style={[styles.option, selected2 === '你好' ? styles.selected : null]}
          onPress={() => checkAnswer2('你好')}
        >
          <Text style={styles.optionText}>你好</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected2 === '我很好' ? styles.selected : null]}
          onPress={() => checkAnswer2('我很好')}
        >
          <Text style={styles.optionText}>我很好</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected2 === '你呢' ? styles.selected : null]}
          onPress={() => checkAnswer2('你呢')}
        >
          <Text style={styles.optionText}>你呢</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.option, selected2 === '再见' ? styles.selected : null]}
          onPress={() => checkAnswer2('再见')}
        >
          <Text style={styles.optionText}>再见</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight style={styles.button} onPress={checkBothAnswers}>
        <Text style={styles.buttonText}>Check Answers</Text>
      </TouchableHighlight>

      <Text style={styles.result}>{result}</Text>
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
  button: {
    backgroundColor: 'blue',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  result: {
    fontSize: 24,
    textAlign: 'center', 
    marginBottom: 30,
  },
});

export default Test1Screen;