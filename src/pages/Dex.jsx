import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [myCards, setMyCards] = useState([]);

  return (
    <>
      <Dashboard myCards={myCards} setMyCards={setMyCards} />
      <br />
      <PokemonList myCards={myCards} setMyCards={setMyCards} />
    </>
  );
};

export default Dex;
