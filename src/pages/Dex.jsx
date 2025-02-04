import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const StCard = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  return (
    <>
      <Dashboard
        myPokemons={myPokemons}
        setMyPokemons={setMyPokemons}
        StCard={StCard}
      />
      <br />
      <PokemonList
        myPokemons={myPokemons}
        setMyPokemons={setMyPokemons}
        StCard={StCard}
      />
    </>
  );
};

export default Dex;
