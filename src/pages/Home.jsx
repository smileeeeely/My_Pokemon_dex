import { Link } from "react-router-dom";
import {
  StHome,
  StHomeButton,
} from "../components/StyledComponents";
import PokemonLogo from "./PokemonLogo.png";

const Home = () => {
  return (
    <StHome>
    <img src={PokemonLogo} />
      <Link to={"/Dex"}>
        <StHomeButton>포켓몬도감 시작하기</StHomeButton>
      </Link>
    </StHome>
  );
};

export default Home;
