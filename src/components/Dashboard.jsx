/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const StTitle = styled.div`
  width: auto;
  height: 200px;
  border-radius: 5px;
  background-color: aliceblue;
  justify-items: center;
`;

const StForm = styled.form`
  display: flex;
  gap: 50px;
`;

const StMyCard = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 2px dashed #b2b2b2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = ({ myCards, setMyCards }) => {
  return (
    <>
      <StTitle>
        <h2>나만의 포켓몬</h2>
        <StForm>
          {myCards.map((card) => {
            return (
              <StMyCard key={card.id}>
                <div>{card.korean_name}</div>
              </StMyCard>
            );
          })}
        </StForm>
      </StTitle>
    </>
  );
};

export default Dashboard;
