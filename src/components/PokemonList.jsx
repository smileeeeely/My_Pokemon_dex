/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "./MOCA_DATA";
import { StListBorder } from "./StyledComponents";

const PokemonList = ({ myPokemons, setMyPokemons, StCard }) => {
  const pokemons = MOCK_DATA;

  return (
    <StListBorder>
      <PokemonCard
        pokemons={pokemons}
        myPokemons={myPokemons}
        setMyPokemons={setMyPokemons}
        StCard={StCard}
      />
    </StListBorder>
  );
};

export default PokemonList;
