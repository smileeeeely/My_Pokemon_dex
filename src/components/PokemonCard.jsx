/* eslint-disable react/prop-types */
import styled from "styled-components";

const StCard = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PokemonCard = ({ pokemonDatas, myCards, setMyCards }) => {
  const addPokemon = (id) => {
    if (myCards.length > 5) return alert("6개만 가능!!");

    const isItIn = myCards.find((index) => index.id === id);
    if (isItIn) return alert("같은 카드!!");

    const findCard = pokemonDatas.find((index) => index.id === id);

    setMyCards([...myCards, findCard]);
  };
  console.log("myCards", myCards);

  return (
    <>
      {pokemonDatas.map((data) => {
        return (
          <StCard key={data.id}>
            <img src={data.img_url} />
            <div>{data.korean_name}</div>
            <button onClick={() => addPokemon(data.id)}>추가</button>
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
