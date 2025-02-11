import { useNavigate } from "react-router-dom";
import {
  StAddAndDeleteButton,
  StCard,
  StDashboardDiv,
  StPokemonBalImg,
  StHeather,
  StTitle,
} from "./StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { setMyPokemons } from "../redux/slices/pokemonSlice";

const Dashboard = () => {
  const myPokemons = useSelector(function (a) {
    return a.myPokemons.list;
  });
  const dispatch = useDispatch();

  /** 내 포켓몬 덱에 포케몬 삭제 */
  const removeMyPokemon = (id) => {
    const filterdMyPokemons = myPokemons.filter((pokemon) => pokemon.id !== id);
    filterdMyPokemons.push({ id: crypto.randomUUID() });
    dispatch(setMyPokemons(filterdMyPokemons));
  };

  /** 포켓몬카드 클릭했을 때 디테일 페이지로 전환 */
  const navigate = useNavigate();
  const navigateToDetail = (pokemonId) => {
    navigate(`/detail?id=${pokemonId}`);
  };

  return (
    <StHeather>
      <StTitle>나만의 포켓몬</StTitle>
      <StDashboardDiv>
        {myPokemons.map((pokemon) => {
          // 포케몬볼인지 확인
          if (isUUID(pokemon.id)) {
            return (
              <StPokemonBalImg
                key={pokemon.id}
                src="data:image/jpeg;base64,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"
              />
            );
          }

          return (
            <StCard key={`my-${pokemon.id}`}>
              <img
                src={pokemon.img_url}
                onClick={() => navigateToDetail(pokemon.id)}
              />
              <div onClick={() => navigateToDetail(pokemon.id)}>
                {pokemon.korean_name}{" "}
              </div>
              <div>No.{pokemon.id}</div>
              <StAddAndDeleteButton
                onClick={() => {
                  removeMyPokemon(pokemon.id);
                }}
              >
                삭제
              </StAddAndDeleteButton>
            </StCard>
          );
        })}
      </StDashboardDiv>
    </StHeather>
  );
};

export default Dashboard;

function isUUID(str) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}
