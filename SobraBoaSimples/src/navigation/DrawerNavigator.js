import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import Sobre from '../screens/Sobre';
import { VERDE, BRANCO, VERDE_CLARO } from '../cores';

const Drawer = createDrawerNavigator();

// DRAWER: menu lateral, o navegador principal do app.
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: VERDE },
        headerTintColor: BRANCO,
        drawerActiveTintColor: VERDE,
        drawerActiveBackgroundColor: VERDE_CLARO,
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
        options={{
          title: 'Início',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre o app',
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
