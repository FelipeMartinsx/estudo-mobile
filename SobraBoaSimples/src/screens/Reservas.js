import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useDoacoes } from '../contexto/DoacoesContext';
import { FUNDO, BRANCO, TEXTO, CINZA, VERDE, VERMELHO } from '../cores';

// Aba "Reservas": mostra as doações reservadas.
export default function Reservas() {
  const { doacoes, cancelarReserva } = useDoacoes();
  const reservadas = doacoes.filter((d) => d.reservada);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.lista}
      data={reservadas}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.vazio}>Você ainda não reservou nada.</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.titulo}>
            {item.emoji} {item.alimento}
          </Text>
          <Text style={styles.texto}>Doador: {item.doador}</Text>
          <Text style={styles.texto}>Retirar em: {item.local}</Text>
          <Text style={styles.status}>Aguardando retirada</Text>

          <Pressable style={styles.botao} onPress={() => cancelarReserva(item.id)}>
            <Text style={styles.botaoTexto}>Cancelar reserva</Text>
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: FUNDO },
  lista: { padding: 16 },
  card: { backgroundColor: BRANCO, borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  titulo: { fontSize: 16, fontWeight: 'bold', color: TEXTO },
  texto: { fontSize: 14, color: CINZA, marginTop: 4 },
  status: { fontSize: 14, fontWeight: 'bold', color: VERDE, marginTop: 8 },
  botao: { borderWidth: 2, borderColor: VERMELHO, borderRadius: 10, paddingVertical: 8, alignItems: 'center', marginTop: 12 },
  botaoTexto: { color: VERMELHO, fontWeight: 'bold' },
  vazio: { textAlign: 'center', color: CINZA, marginTop: 40 },
});
