import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../contexts/MOCA_DATA";

const StListBorder = styled.div`
  width: auto;
  border-radius: 5px;
  background-color: aliceblue;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
`;

const PokemonList = () => {
  const pokemons = MOCK_DATA;

  return (
    <>
      <StListBorder>
        <PokemonCard pokemons={pokemons} />
      </StListBorder>
    </>
  );
};

export default PokemonList;
