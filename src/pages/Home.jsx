import { Link } from "react-router-dom";
import {
  StHome,
  StHomeButton,
  StHomeTitle,
} from "../components/StyledComponents";

const Home = () => {
  return (
    <StHome>
      <StHomeTitle>Pokemon</StHomeTitle>
      <Link to={"/Dex"}>
        <StHomeButton>포켓몬도감 시작하기</StHomeButton>
      </Link>
    </StHome>
  );
};

export default Home;
