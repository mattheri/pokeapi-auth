import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const DEFAULT_IMAGE_POSITION = "top";

const PokeCard = ({ pokemon }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">{pokemon.id}</BCard.Header>
        <BCard.Body>
          <BCard.Img
            variant={DEFAULT_IMAGE_POSITION}
            src={pokemon.sprites.other["official-artwork"].front_default}
            loading="lazy"
            alt={pokemon.name}
          />
          <BCard.Title>{pokemon.name}</BCard.Title>
        </BCard.Body>
      </Card>
    </Col>
  );
};

export default PokeCard;
