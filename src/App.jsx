import { createGlobalStyle } from "styled-components";
import Router from "./shared/Router";
import reset from "styled-reset";
import { Provider } from "react-redux";
import store from "./redux/config/store";
// import { MyPokemonsProvider } from "./contexts/MyPokemonsContext";
// import { PokemonsProvider } from "./contexts/PokemonsContext";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: #ffedc3;
  display: flex;
    flex-direction: column;
    justify-content: center; 
}
`;
const App = () => {
  return (
    // <PokemonsProvider>
      // <MyPokemonsProvider>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
      // </MyPokemonsProvider>
    // </PokemonsProvider>
  );
};

export default App;
