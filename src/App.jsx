import { createGlobalStyle } from "styled-components";
import Router from "./shared/Router";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: #ffedc3;
}
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
