import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './App.style';
import TaskOne from './src/components/TaskOne';
import { RootStack } from './src/navigation';
import MainPage from './src/screens/MainPage/MainPage';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Home" component={MainPage} />
          <RootStack.Screen name="Profile" component={TaskOne} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}



