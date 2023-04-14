import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowBack,
  Container,
  Heading,
  Image,
  TypeChip,
  TypesContainer,
} from "./StyledComponents";
import Layout from "../../Layout/Layout";
import { getSinglePokemon } from "../../../services/pokemon";
import type { PokemonDetails } from "../../../interfaces/PokemonDetails";
import BaseStats from "../../BaseStats/BaseStats";
import PokemonMeasures from "../../PokemonMeasures/PokemonMeasures";
import PokemonMoves from "../../PokemonMoves/PokemonMoves";

interface PokemonDetailsState {
  PokemonDetails: PokemonDetails;
  PokemonMoves: String[];
}

const SinglePokemon = () => {
  const { pokemonId } = useParams();
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonDetailsState["PokemonDetails"]>();
  const [pokemonMoves, setPokemonMoves] =
    useState<PokemonDetailsState["PokemonMoves"]>();

  useEffect(() => {
    const showPokemon = async () => {
      const response = await getSinglePokemon(pokemonId as string);
      if (response !== undefined) {
        setPokemonDetails(response);

        const movesArray: String[] = [];
        response.moves.map((move) => movesArray.push(move.move.name));
        setPokemonMoves(movesArray);
      }
    };
    showPokemon();
  }, [pokemonId]);

  const setColor = pokemonDetails?.types[0].type.name || "normal";
  const pokemonName = `${pokemonDetails?.name
    .charAt(0)
    .toUpperCase()}${pokemonDetails?.name.slice(1)}`;

  return (
    <Layout>
      <>
        <Container style={{ background: bgColorType[setColor] }}>
          <ArrowBack to='/'>{"<"}</ArrowBack>
          <Image src={pokemonDetails?.img_url} alt={pokemonName} />
          <Heading>{pokemonName}</Heading>
          <TypesContainer>
            {pokemonDetails?.types.map((type) => {
              return <TypeChip key={type.type.name}>{type.type.name}</TypeChip>;
            })}
          </TypesContainer>
        </Container>
        <PokemonMeasures
          height={pokemonDetails?.height}
          weight={pokemonDetails?.weight}
        />
        <BaseStats baseStats={pokemonDetails?.stats} />
        <PokemonMoves moves={pokemonMoves} />
      </>
    </Layout>
  );
};

const bgColorType: Record<string, any> = {
  grass: "#2fd9b3",
  normal: "#a7a698",
  bug: "#aabb23",
  fire: "#ff4224",
  water: "#429aec",
  psychic: "#b59fb2",
  dragon: "#f3c186",
};

export default SinglePokemon;
