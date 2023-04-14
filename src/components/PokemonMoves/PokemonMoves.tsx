import {
  Container,
  MovesContainer,
  Heading,
  MoveChip,
} from "./StyledComponents";

interface Props {
  moves: String[] | undefined;
}

const PokemonMoves = ({ moves }: Props) => {
  return (
    <Container>
      <Heading>Moves</Heading>
      <MovesContainer>
        {moves?.map((move, index) => {
          return <MoveChip key={index}>{move}</MoveChip>;
        })}
      </MovesContainer>
    </Container>
  );
};

export default PokemonMoves;
