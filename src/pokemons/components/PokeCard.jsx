import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import PokeService from "../service/PokeService";
import { useState } from "react";
import { useEffect } from "react";

const pokeService = new PokeService();

const DEFAULT_IMAGE_POSITION = "top";

const PokeCard = ({ pokeName, url }) => {
  const [data, setData] = useState(null);

  const getPokemon = async () =>
    setData(await pokeService.getPokemonWithReturnedUrl(url));

  useEffect(() => {
    if (url) getPokemon();
  }, [url]);

  return (
    data && (
      <Col className="my-3">
        <Card>
          <BCard.Header as="small">{data.id}</BCard.Header>
          <BCard.Body>
            <BCard.Img
              variant={DEFAULT_IMAGE_POSITION}
              src={data.sprites.other["official-artwork"].front_default}
              loading="lazy"
              alt={pokeName}
            />
            <BCard.Title>{pokeName}</BCard.Title>
          </BCard.Body>
        </Card>
      </Col>
    )
  );
};

export default PokeCard;
