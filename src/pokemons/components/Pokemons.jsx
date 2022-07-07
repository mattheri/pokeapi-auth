import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PokeService from "../service/PokeService";
import PokeList from "./PokeList";

const pokeService = new PokeService();

const Pokemons = () => {
  const [data, setData] = useState([]);

  const getPokemons = async () => setData(await pokeService.getPokemons());

  useEffect(() => {
    getPokemons();
  }, []);
  return <PokeList pokemons={data} />;
};

export default Pokemons;
