// /* eslint-disable react/prop-types */
// /* eslint-disable react-refresh/only-export-components */
// /** 나만의 포켓몬 초깃값 포케몬볼 랜덤 ID 넣어주기 */
// import { createContext, useState } from "react";
// const setPokemonBallRandomId = () => {
//   let i = 0;
//   let randomIds = [];
//   while (i < 6) {
//     i++;
//     randomIds.push({ id: crypto.randomUUID() });
//   }
//   return randomIds;
// };

// export const MyPokemonsContext = createContext();

// /** 나만의 Pokemons 데이터 Context Provider */
// export function MyPokemonsProvider({ children }) {
//   const [myPokemons, setMyPokemons] = useState(setPokemonBallRandomId());
//   return (
//     <MyPokemonsContext.Provider value={{ myPokemons, setMyPokemons }}>
//       {children}
//     </MyPokemonsContext.Provider>
//   );
// }
