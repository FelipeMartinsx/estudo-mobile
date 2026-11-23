import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useDoacoes } from '../contexto/DoacoesContext';
import CardDoacao from '../components/CardDoacao';
import { FUNDO, CINZA } from '../cores';

// Tela 1 da Stack: lista só as doações que ainda não foram reservadas.
export default function ListaDoacoes({ navigation }) {
  const { doacoes } = useDoacoes();
  const disponiveis = doacoes.filter((d) => !d.reservada);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.lista}
      data={disponiveis}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardDoacao doacao={item} onPress={() => navigation.navigate('Detalhe', { id: item.id })} />
      )}
      ListEmptyComponent={<Text style={styles.vazio}>Nenhuma doação disponível.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: FUNDO },
  lista: { padding: 16 },
  vazio: { textAlign: 'center', color: CINZA, marginTop: 40 },
});
