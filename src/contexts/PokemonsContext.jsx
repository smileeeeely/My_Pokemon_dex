/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import MOCK_DATA from "./MOCK_DATA";

export const PokemonsContext = createContext();

/** Pokemons 데이터 Context Provider */
export function PokemonsProvider({ children }) {
  const pokemons = MOCK_DATA;
  return (
    <PokemonsContext.Provider value={{ pokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
}
