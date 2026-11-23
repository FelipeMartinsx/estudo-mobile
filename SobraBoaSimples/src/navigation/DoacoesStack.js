import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaDoacoes from '../screens/ListaDoacoes';
import DetalheDoacao from '../screens/DetalheDoacao';
import BotaoMenu from './BotaoMenu';
import { VERDE, BRANCO } from '../cores';

const Stack = createNativeStackNavigator();

// STACK: Lista de doações -> Detalhe da doação (com botão de voltar).
export default function DoacoesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: VERDE },
        headerTintColor: BRANCO,
      }}
    >
      <Stack.Screen
        name="Lista"
        component={ListaDoacoes}
        options={{ title: 'Doações disponíveis', headerLeft: () => <BotaoMenu /> }}
      />
      <Stack.Screen name="Detalhe" component={DetalheDoacao} options={{ title: 'Detalhe da doação' }} />
    </Stack.Navigator>
  );
}
