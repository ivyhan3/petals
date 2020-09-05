/* Patient login */

import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PROVIDER LOGIN
        </Text>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}> 
          ORGANIZATION:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter your organization name'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          NAME (LAST, FIRST):
        </Text>
        <TextInput style={styles.input} placeholder = 'Last, first name'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          EMAIL:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter your email address'>
        </TextInput>
      </View>
      <View style={styles.container}> 
        <Text style={styles.promptText}>
          PASSWORD:
        </Text>
        <TextInput style={styles.input} placeholder = 'Enter your password'>
        </TextInput>
      </View>
      <View style={styles.confirmationButton}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E96AD',
    height: 85,
    width: 415,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  promptText: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 25,
    paddingBottom: 5,
  },
  img: { 
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#A2E1E2',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#CDCDC6',
        width: 310,
        height: 45,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 16,
        // letterSpacing: 4,
  }
});

export default App;

