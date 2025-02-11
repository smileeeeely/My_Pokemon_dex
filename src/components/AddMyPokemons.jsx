import MOCK_DATA from "./MOCK_DATA";
import { setMyPokemons } from "../redux/slices/pokemonSlice";

/** 내 포켓몬덱에 포켓몬 추가하기 */
export const AddMyPokemon = (id, myPokemons, dispatch) => {
  const pokemons = MOCK_DATA;

  const filteredPokemons = myPokemons.filter(
    (pokemon) => typeof pokemon.id !== "string"
  );
  if (filteredPokemons.length === 6) {
    return alert("더 이상 선택할 수 없습니다.");
  }

  const isItIn = myPokemons.find((pokemon) => pokemon.id === id);
  if (isItIn) return alert("이미 선택된 포켓몬입니다.");

  filteredPokemons.push(pokemons.find((pokemon) => pokemon.id === id));
  let pushRandomUUID = 6 - filteredPokemons.length;
  while (pushRandomUUID--) {
    filteredPokemons.push({ id: crypto.randomUUID() });
  }
  // setMyPokemons(filteredPokemons);
  dispatch(setMyPokemons(filteredPokemons));
};
