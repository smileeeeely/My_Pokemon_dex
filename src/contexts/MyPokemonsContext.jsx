/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
const nonPokemon = () => {
  let i = 0;
  let randomIds = [];
  while (i < 6) {
    i++;
    randomIds.push({ id: crypto.randomUUID() });
  }
  return randomIds;
};

export const MyPokemonsContext = createContext();

export function MyPokemonsProvider({ children }) {
  const [myPokemons, setMyPokemons] = useState(nonPokemon());
  return (
    <MyPokemonsContext.Provider value={{ myPokemons, setMyPokemons }}>
      {children}
    </MyPokemonsContext.Provider>
  );
}
