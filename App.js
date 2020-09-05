/* Patient Home Screen */

import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';


function PatientHome() {

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>

      
      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: 100, fontSize: 28, color: '#000'}}>
        Welcome back,</Text>
      
      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: -10, fontSize: 28, color: '#4E96AD'}}>
        Patient Name</Text> 

      <Image source={require('./images/daisy.png')} style = {{marginTop: 40}}/>
      
      <Text style={{fontFamily: 'Inter-SemiBold', marginTop: 10, fontSize: 28, color: '#000'}}>
        Today's Task</Text> 
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 360,marginLeft: 40 }} />

        <TouchableOpacity style={styles.button1}>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
                  healthcare provider/organization</Text>
        </TouchableOpacity>
       
        <Image source={require('./images/patient.png')} style = {{marginTop: 30}}/>
        <TouchableOpacity style={styles.button2}>
              <Text style={{fontFamily: 'Inter-Regular', color: '#000', fontSize: 18, textAlign: 'center'}}>
                  patient</Text>
        </TouchableOpacity>

    
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    marginTop: 120,
    height: 571, 
    width: 355,
    borderColor: '#80CFA9',
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center'
  },
  button1: {
    backgroundColor: '#C9D7F8',
    margin: 5,
    padding: 5,
    marginTop: 10,
    paddingRight: 30, 
    paddingLeft: 30,
    borderRadius: 15,
    height: 40
    },
  button2: {
    backgroundColor: '#C9D7F8',
    margin: 5,
    padding: 5,
    marginTop: 10,
    paddingRight: 130, 
    paddingLeft: 130,
    borderRadius: 15,
    height: 40
    }
});

export default PatientHome;