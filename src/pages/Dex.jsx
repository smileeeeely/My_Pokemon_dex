import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <>
      <Dashboard key={`dashboardKey`} />
      <br />
      <PokemonList key={`pokemonListKey`} />
    </>
  );
};

export default Dex;
