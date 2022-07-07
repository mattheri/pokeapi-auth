import React from "react";
import PokeCard from "./PokeCard";
import Row from "react-bootstrap/Row";

const PokeList = ({ pokemons }) => {
  return (
    <Row>
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.name}
          pokeName={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </Row>
  );
};

export default PokeList;
