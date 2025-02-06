import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../contexts/MOCK_DATA";
import {
  StContainer,
  StImg,
  StName,
  StOutButton,
  StPadding,
} from "../components/StyledComponents";

/** 포켓몬 디테일 페이지 */
const Detail = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const detailPageId = Number(searchParams.get("id"));

  const pokemons = MOCK_DATA;
  const pokemonDetail = pokemons.find((pokemon) => pokemon.id === detailPageId);

  return (
    <StContainer>
      <StImg src={pokemonDetail.img_url} />
      <StName>{pokemonDetail.korean_name}</StName>
      <div>No.{pokemonDetail.id}</div>
      <StPadding>타입 : {pokemonDetail.types.join(", ")}</StPadding>
      <StPadding>{pokemonDetail.description}</StPadding>
      <StOutButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </StOutButton>
    </StContainer>
  );
};

export default Detail;
