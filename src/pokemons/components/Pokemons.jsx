import React from "react";
import PokeList from "./PokeList";
import useFetchPokemons from "../hooks/useFetchPokemons";

const Pokemons = () => {
  const data = useFetchPokemons();
  return <PokeList pokemons={data} />;
};

export default Pokemons;
