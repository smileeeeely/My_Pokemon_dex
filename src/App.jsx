import { createGlobalStyle } from "styled-components";
import Router from "./shared/Router";
import reset from "styled-reset";
import { PokemonProvider } from "./contexts/PokemonContext";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: #ffedc3;
}
`;
const App = () => {
  return (
    <PokemonProvider>
      <GlobalStyle />
      <Router />
    </PokemonProvider>
  );
};

export default App;
