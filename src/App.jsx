import { createGlobalStyle } from "styled-components";
import Router from "./shared/Router";
import reset from "styled-reset";
import { MyPokemonsProvider } from "./contexts/MyPokemonsContext";
import { PokemonsProvider } from "./contexts/PokemonsContext";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: #ffedc3;
}
`;
const App = () => {
  return (
    <PokemonsProvider>
      <MyPokemonsProvider>
        <GlobalStyle />
        <Router />
      </MyPokemonsProvider>
    </PokemonsProvider>
  );
};

export default App;
