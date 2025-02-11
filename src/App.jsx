import { createGlobalStyle } from "styled-components";
import Router from "./shared/Router";
import reset from "styled-reset";
import { Provider } from "react-redux";
import store from "./redux/config/store";
import { ToastContainer } from "react-toastify";
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
      <Provider store={store}>
        <ToastContainer />
        <GlobalStyle />
        <Router />
      </Provider>
  );
};

export default App;
