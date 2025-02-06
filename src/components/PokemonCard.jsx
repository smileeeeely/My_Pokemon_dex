import { useNavigate } from "react-router-dom";
import { StAddAndDeleteButton, StCard } from "./StyledComponents";
import { useContext } from "react";
import { MyPokemonsContext} from "../contexts/MyPokemonsContext";
import { PokemonsContext } from "../contexts/PokemonsContext";

const PokemonCard = () => {
  const { myPokemons, setMyPokemons } = useContext(MyPokemonsContext);
  const { pokemons } = useContext(PokemonsContext);
  /** 내 포켓몬덱에 포켓몬 추가하기 */
  const addMyPokemon = (id) => {
    const filteredPokemons = myPokemons.filter(
      (pokemon) => typeof pokemon.id !== "string"
    );
    if (filteredPokemons.length === 6) {
      return alert("더 이상 선택할 수 없습니다.");
    }

    const isItIn = myPokemons.find((pokemon) => pokemon.id === id);
    if (isItIn) return alert("이미 선택된 포켓몬입니다.");

    filteredPokemons.push(pokemons.find((pokemon) => pokemon.id === id));
    let pushRamdomUUID = 6 - filteredPokemons.length;
    while (pushRamdomUUID--) {
      filteredPokemons.push({ id: crypto.randomUUID() });
    }
    setMyPokemons(filteredPokemons);
  };

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
            <StAddAndDeleteButton
              type="button"
              onClick={() => addMyPokemon(pokemon.id)}
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
