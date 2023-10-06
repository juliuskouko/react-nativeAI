// // In App.js in a new project

// import * as React from 'react';
// // import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';

// const Stack = createNativeStackNavigator();

// function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}
//         initialRouteName="Welcome">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigation;


// import * as React from 'react';
import { View, Text, } from 'react-native';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import Notes from '../components/Notes';
import AddNote from '../components/AddNote';
import EditNote from '../components/EditNote';
// import DeletedNotes from '../components/DeletedNotes';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect, useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import { getItem } from '../../utils/asyncStorage';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();

function Navigation() {

  const [note, setNote] = React.useState();
  const [notes, setNotes] = React.useState([]);
  const [date, setDate] = React.useState(new Date().toUTCString());
  const [moveToBin, setMoveToBin] = React.useState([])


  const [showOnboarding, setShowOnboarding] = useState(null);



  function handleNote() {
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');

    AsyncStorage.setItem('storedNotes', JSON.stringify(newNotes)).then(() => {
      setNotes(newNotes)
    }).catch(error => console.log(error))

    AsyncStorage.setItem('date', JSON.stringify(date)).then(() => {
      setDate(date);
    })
  }

  React.useEffect(() => {
    loadNotes();
  }, [])


  const loadNotes = () => {
    AsyncStorage.getItem('storedNotes').then(data => {
      if (data !== null) {
        setNotes(JSON.parse(data))
      }
    }).catch((error) => console.log(error))

    AsyncStorage.getItem('deletedNotes').then(data => {
      if (data !== null) {
        setMoveToBin(JSON.parse(data))
      }
    }).catch((error) => console.log(error))


    AsyncStorage.getItem(date);

  }

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, [])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if (showOnboarding == null) {
    return null;
  }




  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Navigator initialRouteName='Welcome'> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="SignupScreen" component={SignupScreen} />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} /> */}

        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

        <Stack.Screen name="Notes" >
          {props => <Notes{...props} notes={notes} setNotes={setNotes} note={note} setNote={setNote} moveToBin={moveToBin} setMoveToBin={setMoveToBin} date={date} setDate={setDate} />}
        </Stack.Screen>

        <Stack.Screen name="AddNote">
          {props => <AddNote{...props} note={note} setNote={setNote} handleNote={handleNote} />}
        </Stack.Screen>
        {/* <Stack.Screen name="DeletedNotes">
          {props => <DeletedNotes{...props} moveToBin={moveToBin} setMoveToBin={setMoveToBin} notes={notes} setNotes={setNotes} date={date}/>}
        </Stack.Screen> */}

        <Stack.Screen name="EditNote">
          {props => <EditNote{...props} notes={notes} setNotes={setNotes} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;


