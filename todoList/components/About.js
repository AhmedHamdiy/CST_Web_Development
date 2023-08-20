import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';


const About =() =>{
    
    return (
      <View style={styles.container}>
      
      
        <View style={styles.tasksWrapper}>
          <Text style={styles.first}>This app is brought to you by <Text style={styles.ahmed}>Ahmed Hamdy</Text> it helps you add three different types of tasks ranging from ones you have to do today to ones that should be done in the future and even extra tasks! </Text>
          
        
            </View>
        
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
      ahmed: {
          position: 'absolute',
          color:"#45a29e",
      fontSize: 24,
          fontWeight: 'bold',
          top: 43,
      left:26,
    },
      first: {
        position: 'absolute',
      fontSize: 22,
      paddingTop: 20,
      paddingHorizontal: 20,
    }
   
  });
  
export default About;
