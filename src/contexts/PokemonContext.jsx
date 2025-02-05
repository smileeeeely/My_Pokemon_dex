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

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [myPokemons, setMyPokemons] = useState(nonPokemon());
  console.log(myPokemons);
  console.log('children',children)
  return (
    <PokemonContext.Provider value={{ myPokemons, setMyPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}
