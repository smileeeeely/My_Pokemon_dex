/* eslint-disable react/prop-types */
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

const Dashboard = ({ myCards, setMyCards }) => {
  const removePokemon = (id) => {
    const filterdCards = myCards.filter((card) => card.id !== id);

    setMyCards(filterdCards);
  };

  return (
    <>
      <StTitle>
        <h2>나만의 포켓몬</h2>
        <StDiv>
          {myCards.map((data) => {
            return (
              <StCard key={data.id}>
                <img src={data.img_url} />
                <div>{data.korean_name}</div>
                <button onClick={() => removePokemon(data.id)}>삭제</button>
              </StCard>
            );
          })}
        </StDiv>
      </StTitle>
    </>
  );
};

export default Dashboard;
