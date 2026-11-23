import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { BRANCO } from '../cores';

// Botão de três linhas que abre o menu lateral (Drawer).
export default function BotaoMenu() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} hitSlop={10} style={{ marginRight: 12 }}>
      <Ionicons name="menu" size={26} color={BRANCO} />
    </Pressable>
  );
}
