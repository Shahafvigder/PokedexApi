import React, { useEffect, useState } from "react";
//import { getAllPokemons, getOnePokemons } from "../service/ApiDatabase";
import PokemonThumb from "../components/PokemonThumb";
import { MainDiv } from "../components/allPokemonStyled";

const AllPokemonsList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=200"
  );

  useEffect(() => {
    const getAllPokemons = async () => {
      const res = await fetch(loadMore);
      const data = await res.json();

      setLoadMore(data.next);

      function createPokemonObject(results) {
        results.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();
          setAllPokemons((currentList) => [...currentList, data]);
        });
      }
      createPokemonObject(data.results);
    };
    getAllPokemons();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <MainDiv>
        {allPokemons.map((pokemonStats, index) => (
          <PokemonThumb
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
            pokemonvalue={pokemonStats}
          />
        ))}
      </MainDiv>
    </>
  );
};

export default AllPokemonsList;
