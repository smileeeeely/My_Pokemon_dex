import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const nonPokemon = () => {
  let i = 0;
  let randomIds = [];
  while (i < 6) {
    i++;
    randomIds.push({ id: crypto.randomUUID() });
  }
  return randomIds;
};

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState(nonPokemon());

  return (
    <>
      <Dashboard myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
      <PokemonList myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
    </>
  );
};

export default Dex;
