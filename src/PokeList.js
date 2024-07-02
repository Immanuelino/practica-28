import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokeList.css'; // Import your CSS file


const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const { results } = response.data;
        const pokemonData = await Promise.all(
          results.map(async pokemon => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );
        setPokemonList(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="header">
        <h1>Pokemon Details</h1>
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search Pokemon..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredPokemon.map(pokemon => (
          <li key={pokemon.id} className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Abilities:</p>
            <ul className="abilities-list">
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeList;