import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Pressable, Button} from 'react-native';
import Task from './components/Task';
import TaskList from './components/TaskList';
import About from './components/About';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
      title="Future"
      onPress={() =>
        navigation.navigate('Future', {name: 'Future'})
      }
        style={styles.mybutton}
    />

    <Button
      title="Today"
      onPress={() =>
        navigation.navigate('Today', {name: 'Today'})
      }
      style={styles.mybutton}
    />

    <Button
      title="Extra"
      onPress={() =>
        navigation.navigate('Extra', {name: 'Extra'})
      }
      style={styles.mybutton}
    />

    <Button
      title="About"
      onPress={() =>
        navigation.navigate('About', {name: 'About'})
      }
      style={styles.mybutton}
    />

    </View>
    
  );
};
const ProfileScreen = ({ navigation, route }) => {
  if (route.params.name=='About') {
    return <About />;
  }
  return <TaskList text={route.params.name}/>;
};


export default function App() {
  
      return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="About" component={ProfileScreen} />
        <Stack.Screen name="Future" component={ProfileScreen} />
        <Stack.Screen name="Today" component={ProfileScreen} />
        <Stack.Screen name="Extra" component={ProfileScreen} />
            
      </Stack.Navigator>
    </NavigationContainer>
  );
      
  
  }
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3962ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavContainer: {
    position: "absolute",
    alignItems: "center",
    top:50,
  },

  NavBar: {
    backgroundColor: "#eee",
    justifyContent: "space-evenly",
    columnGap:50,
    borderRadius:40
  },
  IconBehave: {
    padding:14,
  },
});
