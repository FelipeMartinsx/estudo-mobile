import React, { createContext, useContext, useState } from 'react';
import { doacoesIniciais } from '../data/dados';

// O Context guarda a lista de doações num lugar só,
// e qualquer tela consegue ler e mudar essa lista.
const DoacoesContext = createContext(null);

export function DoacoesProvider({ children }) {
  const [doacoes, setDoacoes] = useState(doacoesIniciais);

  function adicionar(nova) {
    setDoacoes([{ ...nova, id: Date.now().toString(), reservada: false }, ...doacoes]);
  }

  function reservar(id) {
    setDoacoes(doacoes.map((d) => (d.id === id ? { ...d, reservada: true } : d)));
  }

  function cancelarReserva(id) {
    setDoacoes(doacoes.map((d) => (d.id === id ? { ...d, reservada: false } : d)));
  }

  function excluir(id) {
    setDoacoes(doacoes.filter((d) => d.id !== id));
  }

  return (
    <DoacoesContext.Provider value={{ doacoes, adicionar, reservar, cancelarReserva, excluir }}>
      {children}
    </DoacoesContext.Provider>
  );
}

export function useDoacoes() {
  return useContext(DoacoesContext);
}
