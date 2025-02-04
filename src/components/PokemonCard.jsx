/* eslint-disable react/prop-types */

const PokemonCard = ({ pokemons, myPokemons, setMyPokemons, StCard }) => {
  const addMyPokemon = (id) => {
    if (myPokemons.length > 5) return alert("6개만 가능!!");

    const isItIn = myPokemons.find((pokemon) => pokemon.id === id);
    if (isItIn) return alert("같은 카드!!");

    const myNewPokemon = pokemons.find((pokemon) => pokemon.id === id);

    setMyPokemons([...myPokemons, myNewPokemon]);
  };
  console.log("myPokemons", myPokemons);

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <StCard key={pokemon.id}>
            <img src={pokemon.img_url} />
            <div>{pokemon.korean_name}</div>
            <button onClick={() => addMyPokemon(pokemon.id)}>추가</button>
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
