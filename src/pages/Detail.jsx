import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../components/MOCK_DATA";
import {
  StContainer,
  StImg,
  StName,
  StDetailButton,
  StPadding,
} from "../components/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { AddMyPokemon } from "../components/AddMyPokemons";

/** 포켓몬 디테일 페이지 */
const Detail = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const detailPageId = Number(searchParams.get("id"));

  const pokemons = MOCK_DATA;
  const pokemonDetail = pokemons.find((pokemon) => pokemon.id === detailPageId);

  const myPokemons = useSelector(function (a) {
    return a.myPokemons.list;
  });
  const dispatch = useDispatch();

  return (
    <StContainer>
      <StImg src={pokemonDetail.img_url} />
      <StName>{pokemonDetail.korean_name}</StName>
      <div>No.{pokemonDetail.id}</div>
      <StPadding>타입 : {pokemonDetail.types.join(", ")}</StPadding>
      <StPadding>{pokemonDetail.description}</StPadding>
      <div>
        <StDetailButton
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로 가기
        </StDetailButton>
        <StDetailButton
          onClick={() => {
            AddMyPokemon(pokemonDetail.id, myPokemons, dispatch);
          }}
        >
          추가
        </StDetailButton>
      </div>
    </StContainer>
  );
};

export default Detail;
