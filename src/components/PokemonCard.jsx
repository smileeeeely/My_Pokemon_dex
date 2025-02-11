import { useNavigate } from "react-router-dom";
import { StAddAndDeleteButton, StCard } from "./StyledComponents";
// import { useContext } from "react";
// import { MyPokemonsContext } from "../contexts/MyPokemonsContext";
import { useDispatch, useSelector } from "react-redux";
import MOCK_DATA from "./MOCK_DATA";
import { AddMyPokemon } from "./AddMyPokemons";
// import { setMyPokemons } from "../redux/slices/pokemonSlice";

const PokemonCard = () => {
  const pokemons = MOCK_DATA;
  const myPokemons = useSelector(function (a) {
    return a.myPokemons.list;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToDetail = (pokemonId) => {
    navigate(`/detail?id=${pokemonId}`);
  };

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <StCard key={pokemon.id}>
            <img
              onClick={() => navigateToDetail(pokemon.id)}
              src={pokemon.img_url}
            />
            <div onClick={() => navigateToDetail(pokemon.id)}>
              {pokemon.korean_name}
            </div>
            <div>No.{pokemon.id}</div>
            <StAddAndDeleteButton
              type="button"
              onClick={() => {
                AddMyPokemon(pokemon.id, myPokemons, dispatch);
              }}
            >
              추가
            </StAddAndDeleteButton>
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
