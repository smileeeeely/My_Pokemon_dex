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

const PokemonCard = ({ data }) => {
  return (
    <StCard>
      <img src={data.img_url} />
      <div>{data.korean_name}</div>
      <button>추가</button>
    </StCard>
  );
};

export default PokemonCard;
