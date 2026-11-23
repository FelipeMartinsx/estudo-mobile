import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DoacoesStack from './DoacoesStack';
import Publicar from '../screens/Publicar';
import Reservas from '../screens/Reservas';
import BotaoMenu from './BotaoMenu';
import { VERDE, BRANCO, CINZA } from '../cores';

const Tab = createBottomTabNavigator();

const ICONES = {
  Doacoes: 'fast-food-outline',
  Publicar: 'add-circle-outline',
  Reservas: 'bookmark-outline',
};

// BOTTOM TABS: as 3 telas principais, na barra de baixo.
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: VERDE,
        tabBarInactiveTintColor: CINZA,
        headerStyle: { backgroundColor: VERDE },
        headerTintColor: BRANCO,
        headerLeft: () => <BotaoMenu />,
        tabBarIcon: ({ color, size }) => <Ionicons name={ICONES[route.name]} size={size} color={color} />,
      })}
    >
      {/* A aba Doações tem a própria Stack, que já mostra o cabeçalho */}
      <Tab.Screen name="Doacoes" component={DoacoesStack} options={{ title: 'Doações', headerShown: false }} />
      <Tab.Screen name="Publicar" component={Publicar} options={{ title: 'Publicar' }} />
      <Tab.Screen name="Reservas" component={Reservas} options={{ title: 'Reservas' }} />
    </Tab.Navigator>
  );
}
