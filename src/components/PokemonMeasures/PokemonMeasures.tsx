import {
  Container,
  FlexContainer,
  Heading,
  MeasureContainer,
  StatName,
  StatValue,
} from "./StyledComponents";

interface Props {
  height: number | undefined;
  weight: number | undefined;
}

const PokemonMeasures = ({ height, weight }: Props) => {
  return (
    <Container>
      <Heading>Measures</Heading>
      <FlexContainer>
        <MeasureContainer>
          <StatName>Height</StatName>
          <StatValue>{height}</StatValue>
        </MeasureContainer>
        <MeasureContainer>
          <StatName>Weight</StatName>
          <StatValue>{weight}</StatValue>
        </MeasureContainer>
      </FlexContainer>
    </Container>
  );
};

export default PokemonMeasures;
