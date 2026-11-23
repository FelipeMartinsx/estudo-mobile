import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { FUNDO, TEXTO, CINZA, VERDE } from '../cores';

export default function Sobre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.emoji}>🌱</Text>
      <Text style={styles.nome}>Sobra Boa</Text>
      <Text style={styles.slogan}>Do excedente ao prato de quem precisa</Text>

      <Text style={styles.subtitulo}>O problema</Text>
      <Text style={styles.texto}>
        Mercados e restaurantes jogam fora comida boa. Instituições precisam de alimento e não sabem onde achar.
      </Text>

      <Text style={styles.subtitulo}>Como o app ajuda</Text>
      <Text style={styles.texto}>
        O doador publica o que sobrou. A instituição vê as doações e reserva.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: FUNDO },
  conteudo: { padding: 20 },
  emoji: { fontSize: 56, textAlign: 'center' },
  nome: { fontSize: 26, fontWeight: 'bold', color: VERDE, textAlign: 'center', marginTop: 8 },
  slogan: { fontSize: 14, color: CINZA, textAlign: 'center', marginBottom: 12 },
  subtitulo: { fontSize: 17, fontWeight: 'bold', color: TEXTO, marginTop: 20, marginBottom: 6 },
  texto: { fontSize: 15, color: TEXTO, lineHeight: 22 },
});
