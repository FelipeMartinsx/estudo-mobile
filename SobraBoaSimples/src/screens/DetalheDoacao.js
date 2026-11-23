import React from 'react';
import { View, Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { useDoacoes } from '../contexto/DoacoesContext';
import { FUNDO, BRANCO, TEXTO, CINZA, VERDE, BORDA, VERMELHO } from '../cores';

// Tela 2 da Stack: recebe o id pela navegação e busca a doação no Context.
export default function DetalheDoacao({ route, navigation }) {
  const { id } = route.params;
  const { doacoes, reservar, excluir } = useDoacoes();
  const doacao = doacoes.find((d) => d.id === id);

  if (!doacao) {
    return <Text style={styles.aviso}>Doação não encontrada.</Text>;
  }

  function fazerReserva() {
    reservar(id);
    Alert.alert('Reservado!', 'A doação foi para a aba Reservas.');
    navigation.goBack();
  }

  function confirmarExclusao() {
    Alert.alert('Excluir', `Excluir "${doacao.alimento}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          excluir(id);
          navigation.goBack();
        },
      },
    ]);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.emoji}>{doacao.emoji}</Text>
      <Text style={styles.titulo}>{doacao.alimento}</Text>

      <View style={styles.card}>
        <Linha rotulo="Doador" valor={doacao.doador} />
        <Linha rotulo="Quantidade" valor={doacao.quantidade} />
        <Linha rotulo="Validade" valor={doacao.validade} />
        <Linha rotulo="Local de retirada" valor={doacao.local} />
      </View>

      {doacao.descricao !== '' && (
        <View style={styles.card}>
          <Text style={styles.rotulo}>Descrição</Text>
          <Text style={styles.descricao}>{doacao.descricao}</Text>
        </View>
      )}

      <Pressable style={styles.botao} onPress={fazerReserva}>
        <Text style={styles.botaoTexto}>Reservar doação</Text>
      </Pressable>

      <Pressable style={styles.botaoExcluir} onPress={confirmarExclusao}>
        <Text style={styles.botaoExcluirTexto}>Excluir</Text>
      </Pressable>
    </ScrollView>
  );
}

// Componente pequeno para não repetir "rótulo: valor".
function Linha({ rotulo, valor }) {
  return (
    <View style={styles.linha}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: FUNDO },
  conteudo: { padding: 16 },
  emoji: { fontSize: 64, textAlign: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: TEXTO, textAlign: 'center', marginVertical: 8 },
  card: { backgroundColor: BRANCO, borderRadius: 12, padding: 16, marginTop: 12 },
  linha: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: BORDA },
  rotulo: { fontSize: 12, color: CINZA },
  valor: { fontSize: 15, fontWeight: 'bold', color: TEXTO, marginTop: 2 },
  descricao: { fontSize: 15, color: TEXTO, marginTop: 4, lineHeight: 22 },
  botao: { backgroundColor: VERDE, borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 20 },
  botaoTexto: { color: BRANCO, fontSize: 16, fontWeight: 'bold' },
  botaoExcluir: { borderWidth: 2, borderColor: VERMELHO, borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginTop: 12 },
  botaoExcluirTexto: { color: VERMELHO, fontSize: 15, fontWeight: 'bold' },
  aviso: { textAlign: 'center', color: CINZA, marginTop: 40 },
});
