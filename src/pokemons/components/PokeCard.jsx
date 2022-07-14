import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { capitalize } from "../../utils";

const DEFAULT_IMAGE_POSITION = "top";

const PokeCard = ({ pokemon }) => {
  return (
    <Col className="my-3">
      <Link to={`/pokemon/${pokemon.id}`}>
        <Card>
          <BCard.Header as="small">{pokemon.id}</BCard.Header>
          <BCard.Body>
            <BCard.Img
              variant={DEFAULT_IMAGE_POSITION}
              src={pokemon.sprites.other["official-artwork"].front_default}
              loading="lazy"
              alt={capitalize(pokemon.name)}
            />
            <BCard.Title>{capitalize(pokemon.name)}</BCard.Title>
          </BCard.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default PokeCard;
