import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { DoacoesProvider } from './src/contexto/DoacoesContext';

export default function App() {
  return (
    <DoacoesProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <DrawerNavigator />
      </NavigationContainer>
    </DoacoesProvider>
  );
}
