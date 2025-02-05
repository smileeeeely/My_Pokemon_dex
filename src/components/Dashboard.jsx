import { useNavigate } from "react-router-dom";
import { StAddAndDeleteButton, StCard, StDiv, StPokemonBalImg, StTitle } from "./StyledComponents";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const Dashboard = () => {
  const {myPokemons, setMyPokemons} = useContext(PokemonContext);
  const removeMyPokemon = (id) => {
    const filterdMyPokemons = myPokemons.filter((pokemon) => pokemon.id !== id);
    filterdMyPokemons.push({ id: crypto.randomUUID() });

    setMyPokemons(filterdMyPokemons);
  };

  const navigate = useNavigate();
  const navigateToDetail = (pokemonId) => {
    navigate(`/detail?id=${pokemonId}`);
  };

  return (
    <>
      <StTitle>
        <h2>나만의 포켓몬</h2>
        <StDiv>
          {myPokemons.map((pokemon) => {
            if (typeof pokemon.id === "string") {
              return (
                <div key={pokemon.id}>
                  <StPokemonBalImg src="data:image/png;base64,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" />
                </div>
              );
            } else {
              return (
                <>
                  <StCard key={pokemon.id}>
                    <img
                      src={pokemon.img_url}
                      onClick={() => navigateToDetail(pokemon.id)}
                    />
                    <div onClick={() => navigateToDetail(pokemon.id)}>
                      {pokemon.korean_name}{" "}
                    </div>
                    <StAddAndDeleteButton onClick={() => removeMyPokemon(pokemon.id)}>
                      삭제
                    </StAddAndDeleteButton>
                  </StCard>
                </>
              );
            }
          })}
        </StDiv>
      </StTitle>
    </>
  );
};

export default Dashboard;
