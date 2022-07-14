import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader";
import routes from "../../router/routes";
import PokeService from "../service/PokeService";
import PokemonMoves from "./PokemonMoves";
import { capitalize } from "../../utils";

const pokeService = new PokeService();

const IndividualPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const params = useParams();

  const getPokemonById = async () => {
    if (params.id) {
      setPokemon(await pokeService.getPokemonById(params.id));
    }
  };

  useEffect(() => {
    getPokemonById();
  }, [params]);

  return (
    pokemon && (
      <>
        <ProfileHeader
          profileImage={pokemon.sprites.other["official-artwork"].front_default}
          alt={capitalize(pokemon.name)}
          backTo={routes.home}
          backToName="Home"
          name={capitalize(pokemon.name)}
        />
        <PokemonMoves moves={pokemon.moves} />
      </>
    )
  );
};

export default IndividualPokemon;
