import ListGroup from "react-bootstrap/ListGroup";
import { capitalize } from "../../utils";

const PokemonMoves = ({ moves }) => {
  return (
    <ListGroup className="my-5">
      {moves.map((move) => (
        <ListGroup.Item>{capitalize(move.move.name)}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PokemonMoves;
