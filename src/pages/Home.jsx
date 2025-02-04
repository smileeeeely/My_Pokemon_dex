import { Link } from "react-router-dom";
import styled from "styled-components";

const StHome = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

const StButton = styled.button`
  width: 150px;
  height: 30px;
  background-color: #c20202;
  border-radius: 5px;
  color: white;
  border: none;
  margin: 0px;
`;

const StTitle = styled.h1`
  color: #ffbf00;
`;

const Home = () => {
  return (
    <StHome>
      <StTitle>Pokemon</StTitle>
      <Link to={"/Dex"}>
        <StButton>포켓몬도감 시작하기</StButton>
      </Link>
    </StHome>
  );
};

export default Home;
