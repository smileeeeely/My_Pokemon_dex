/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StTitle = styled.div`
  width: auto;
  height: 200px;
  border-radius: 5px;
  background-color: aliceblue;
  justify-items: center;
`;

const StDiv = styled.div`
  display: flex;
  gap: 50px;
`;

const Dashboard = ({ myPokemons, setMyPokemons, StCard }) => {
  const removeMyPokemon = (id) => {
    const filterdMyPokemons = myPokemons.filter((pokemon) => pokemon.id !== id);

    setMyPokemons(filterdMyPokemons);
  };

  const navigate = useNavigate();
  const navigateToDetail = (pokemonId, e) => {
    if (("e", e.target.localName === "button")) return;
    navigate(`/detail?id=${pokemonId}`);
  };


  return (
    <>
      <StTitle>
        <h2>나만의 포켓몬</h2>
        <StDiv>
          {myPokemons.map((pokemon) => {
            return (
              <StCard key={pokemon.id} onClick={(e) => navigateToDetail(pokemon.id, e)}>
                <img src={pokemon.img_url} />
                <div>{pokemon.korean_name}</div>
                <button onClick={() => removeMyPokemon(pokemon.id)}>
                  삭제
                </button>
              </StCard>
            );
          })}
        </StDiv>
      </StTitle>
    </>
  );
};

export default Dashboard;
