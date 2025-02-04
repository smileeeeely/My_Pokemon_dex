import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../components/MOCA_DATA";
import styled from "styled-components";

const StContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StImg = styled.img`
  height: 200px;
  width: 200px;
`;

const StDiv = styled.div`
  padding: 4vh;
`;

const StButton = styled.button`
  color: white;
  background-color: black;
  border-radius: 5px;
  height: 30px;
  width: 70px;
`;

const StName = styled.h1`
  padding: 2vh;
  color: red;
  font-weight: 900;
  font-size: x-large;
`;

const Detail = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const detailPageId = Number(searchParams.get("id"));

  const pokemons = MOCK_DATA;
  const pokemonDetail = pokemons.find((pokemon) => pokemon.id === detailPageId);

  return (
    <>
      <StContainer>
        <StImg src={pokemonDetail.img_url} />
        <StName>{pokemonDetail.korean_name}</StName>
        <StDiv>타입 : {pokemonDetail.types.join(", ")}</StDiv>
        <StDiv>{pokemonDetail.description}</StDiv>
        <StButton
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로 가기
        </StButton>
      </StContainer>
    </>
  );
};

export default Detail;
