import React, { useState } from "react";
import Axios from "axios";

import "./App.css";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const clickHandler = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) =>
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          image: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        })
    );
    setPokemonChosen(true);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Pokemon Stats</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        ></input>
        <button onClick={clickHandler}>Search Pokemon</button>
      </div>
      <div className="displaySection">
        {!pokemonChosen ? (
          <h1>Please Choose a Pokemon</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} />
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>HP: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
