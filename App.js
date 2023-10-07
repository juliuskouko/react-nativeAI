import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import Store from './src/context/store';
export default function App() {
  
  return (
    <Provider store={Store}>
       <AppNavigation />
    </Provider>
   
  )
}
