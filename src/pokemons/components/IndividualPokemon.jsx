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
  const [data, setData] = useState(null);
  const params = useParams();

  const getPokemonById = async () => {
    if (params.id) {
      setData(await pokeService.getPokemonById(params.id));
    }
  };

  useEffect(() => {
    getPokemonById();
  }, [params]);

  if (data) {
    return (
      <>
        <ProfileHeader
          profileImage={data.sprites.other["official-artwork"].front_default}
          alt={capitalize(data.name)}
          backTo={routes.home}
          backToName="Home"
          name={capitalize(data.name)}
        />
        <PokemonMoves moves={data.moves} />
      </>
    );
  } else {
    return null;
  }
};

export default IndividualPokemon;
