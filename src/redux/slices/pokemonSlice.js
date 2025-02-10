import { createSlice } from "@reduxjs/toolkit";



const setPokemonBallRandomId = () => {
  let i = 0;
  let randomIds = [];
  while (i < 6) {
    i++;
    randomIds.push({ id: crypto.randomUUID() });
  }
  return randomIds;
};

const initialState = {
    list: setPokemonBallRandomId(),
}
const pokemonSlice = createSlice({
  name: "myPokemons",
  initialState,
  reducers: {
    setMyPokemons: (state, action) => {
        state.list = (action.payload);
    },
    removeMyPokemon: (state, action) => {
        state.list = (action.payload);
    },
  },
});

export const { setMyPokemons, removeMyPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
