import React, { useState } from 'react';
import { Text, TextInput, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { useDoacoes } from '../contexto/DoacoesContext';
import { FUNDO, BRANCO, TEXTO, VERDE, BORDA, VERMELHO } from '../cores';

// Aba "Publicar": formulário que adiciona uma doação na lista.
export default function Publicar({ navigation }) {
  const { adicionar } = useDoacoes();

  const [alimento, setAlimento] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [doador, setDoador] = useState('');
  const [local, setLocal] = useState('');
  const [validade, setValidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  function publicar() {
    if (alimento.trim() === '' || quantidade.trim() === '' || doador.trim() === '') {
      setErro('Preencha pelo menos alimento, quantidade e doador.');
      return;
    }

    adicionar({ emoji: '🍽️', alimento, quantidade, doador, local, validade, descricao });

    setAlimento('');
    setQuantidade('');
    setDoador('');
    setLocal('');
    setValidade('');
    setDescricao('');
    setErro('');

    Alert.alert('Publicado!', 'A doação já aparece na lista.');
    navigation.navigate('Doacoes', { screen: 'Lista' });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
      <Text style={styles.rotulo}>O que você quer doar? *</Text>
      <TextInput style={styles.input} placeholder="Ex.: Pães do dia" value={alimento} onChangeText={setAlimento} />

      <Text style={styles.rotulo}>Quantidade *</Text>
      <TextInput style={styles.input} placeholder="Ex.: 20 unidades" value={quantidade} onChangeText={setQuantidade} />

      <Text style={styles.rotulo}>Doador *</Text>
      <TextInput style={styles.input} placeholder="Nome do mercado, padaria..." value={doador} onChangeText={setDoador} />

      <Text style={styles.rotulo}>Local de retirada</Text>
      <TextInput style={styles.input} placeholder="Rua, número e bairro" value={local} onChangeText={setLocal} />

      <Text style={styles.rotulo}>Validade</Text>
      <TextInput style={styles.input} placeholder="Ex.: Hoje, até 19h" value={validade} onChangeText={setValidade} />

      <Text style={styles.rotulo}>Descrição</Text>
      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
        placeholder="Estado do alimento, embalagem..."
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <Pressable style={styles.botao} onPress={publicar}>
        <Text style={styles.botaoTexto}>Publicar doação</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: FUNDO },
  conteudo: { padding: 16, paddingBottom: 40 },
  rotulo: { fontSize: 14, fontWeight: 'bold', color: TEXTO, marginTop: 16, marginBottom: 6 },
  input: {
    backgroundColor: BRANCO,
    borderWidth: 1,
    borderColor: BORDA,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: TEXTO,
  },
  erro: { color: VERMELHO, textAlign: 'center', marginTop: 16 },
  botao: { backgroundColor: VERDE, borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 24 },
  botaoTexto: { color: BRANCO, fontSize: 16, fontWeight: 'bold' },
});
