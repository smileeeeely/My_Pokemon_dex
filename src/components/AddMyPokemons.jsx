import MOCK_DATA from "./MOCK_DATA";
import { setMyPokemons } from "../redux/slices/pokemonSlice";
import { toast } from "react-toastify";

/** 내 포켓몬덱에 포켓몬 추가하기 */
export const AddMyPokemon = (id, myPokemons, dispatch) => {
  const pokemons = MOCK_DATA;

  const filteredPokemons = myPokemons.filter(
    (pokemon) => typeof pokemon.id !== "string"
  );
  if (filteredPokemons.length === 6)
    return toast("더 이상 추가할 수 없습니다", { autoClose: 1000 });

  const isItIn = myPokemons.find((pokemon) => pokemon.id === id);
  if (isItIn) return toast("이미 선택된 포켓몬입니다.", { autoClose: 1000 });

  filteredPokemons.push(pokemons.find((pokemon) => pokemon.id === id));
  let pushRandomUUID = 6 - filteredPokemons.length;
  while (pushRandomUUID--) {
    filteredPokemons.push({ id: crypto.randomUUID() });
  }
  dispatch(setMyPokemons(filteredPokemons));
  toast(`${pokemons[id - 1].korean_name}가(이) 추가되었습니다!`, {
    autoClose: 1000,
  });
};
