/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemons, myPokemons, setMyPokemons, StCard }) => {
  const addMyPokemon = (id) => {
    if (myPokemons.length > 5) return alert("6개만 가능!!");

    const isItIn = myPokemons.find((pokemon) => pokemon.id === id);
    if (isItIn) return alert("같은 카드!!");

    const myNewPokemon = pokemons.find((pokemon) => pokemon.id === id);

    setMyPokemons([...myPokemons, myNewPokemon]);
  };
  console.log("myPokemons", myPokemons);

  const navigate = useNavigate();
  const navigateToDetail = (pokemonId, e) => {
    if (("e", e.target.localName === "button")) return;
    navigate(`/detail?id=${pokemonId}`);
  };

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <StCard
            key={pokemon.id}
            onClick={(e) => navigateToDetail(pokemon.id, e)}
          >
            <img src={pokemon.img_url} />
            <div>{pokemon.korean_name}</div>
            <button type="button" onClick={() => addMyPokemon(pokemon.id)}>
              추가
            </button>
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
