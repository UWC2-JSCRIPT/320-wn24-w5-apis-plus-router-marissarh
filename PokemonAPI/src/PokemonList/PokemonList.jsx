// PokemonList.js
import React from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function PokemonList({ pokemonList }) {
    if (!pokemonList){
        return <p>Enter a Pokemon</p>
    }
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <PokemonDetails key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
