import { configureStore } from "@reduxjs/toolkit";
import myPokemonsReducer from "../slices/pokemonSlice";

const store = configureStore({
  reducer: {
    myPokemons: myPokemonsReducer,
  },
});

export default store;
