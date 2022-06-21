import { ComponentElement, ReactNode, useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const [nome, setNome] = useState('');

  const context = {
    nome,
    setNome
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  )
};

export default Provider;
