import { createContext, Dispatch, SetStateAction } from 'react';

type UserContext = {
  nome: string,
  setNome: (nome: string) => void
}

const defaultState = {
  nome: 'usuário',
  setNome: () => console.log('sem provider')
}

const Context = createContext<UserContext>(defaultState);

export default Context;
