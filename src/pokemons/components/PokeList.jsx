import React from "react";
import PokeCard from "./PokeCard";
import Row from "react-bootstrap/Row";

const PokeList = ({ pokemons }) => {
  return (
    <Row>
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Row>
  );
};

export default PokeList;
