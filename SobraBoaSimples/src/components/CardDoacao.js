import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BRANCO, TEXTO, CINZA, VERDE, VERDE_CLARO } from '../cores';

// Componente reaproveitado: o cartão de uma doação na lista.
export default function CardDoacao({ doacao, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconeBox}>
        <Text style={styles.emoji}>{doacao.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.titulo}>{doacao.alimento}</Text>
        <Text style={styles.texto}>{doacao.doador}</Text>
        <Text style={styles.texto}>{doacao.quantidade}</Text>
        <Text style={styles.validade}>Validade: {doacao.validade}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BRANCO,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  iconeBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: VERDE_CLARO,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  emoji: { fontSize: 30 },
  info: { flex: 1 },
  titulo: { fontSize: 16, fontWeight: 'bold', color: TEXTO },
  texto: { fontSize: 13, color: CINZA, marginTop: 2 },
  validade: { fontSize: 13, color: VERDE, fontWeight: 'bold', marginTop: 4 },
});
