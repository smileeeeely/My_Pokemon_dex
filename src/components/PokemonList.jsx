import PokemonCard from "./PokemonCard";
import { StListBorder } from "./StyledComponents";

const PokemonList = () => {
  return (
    <>
      <StListBorder>
        <PokemonCard />
      </StListBorder>
    </>
  );
};

export default PokemonList;
