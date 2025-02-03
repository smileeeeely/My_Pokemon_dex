import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "./MOCA_DATA";

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
  const pokemonDatas = MOCK_DATA;
  console.log('pokemonDatas',pokemonDatas)

  return (
    <>
      <StListBorder>
        {
            pokemonDatas.map((data) => {
                return(
                    <PokemonCard key={data.id} data={data}/>
                )
            })
        }
      </StListBorder>
    </>
  );
};

export default PokemonList;
