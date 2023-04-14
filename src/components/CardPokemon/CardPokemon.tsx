import type { PokemonResumen } from "../../interfaces/PokemonResumen";
import { PokemonResponse } from "../../interfaces/PokemonResponse";
import { useEffect, useState } from "react";
import { getResumePokemon } from "../../services/pokemon";
import { Card, Heading, Image, TypeChip } from "./StyledComponents";

interface Props {
  pokemon: PokemonResponse;
}

interface PokemonResumenState {
  PokemonResumen: PokemonResumen;
}

const CardPokemon = ({ pokemon }: Props) => {
  const [resumenPokemon, setResumenPokemon] =
    useState<PokemonResumenState["PokemonResumen"]>();

  useEffect(() => {
    const showResumenPokemon = async () => {
      const response = await getResumePokemon(pokemon.url);
      if (response !== undefined) {
        setResumenPokemon(response);
      }
    };

    showResumenPokemon();
  }, [pokemon]);

  const setColor = resumenPokemon?.types[0].type.name || "";
  const pokemonName = `${resumenPokemon?.name
    .charAt(0)
    .toUpperCase()}${resumenPokemon?.name.slice(1)}`;

  return (
    <Card
      to={`/${resumenPokemon?.id}`}
      style={{ background: bgColorType[setColor] }}
    >
      <Heading>{pokemonName}</Heading>
      {resumenPokemon?.types.map((type) => {
        return <TypeChip key={type.type.name}>{type.type.name}</TypeChip>;
      })}

      <Image src={resumenPokemon?.img_url} alt={pokemonName} />
    </Card>
  );
};

const bgColorType: Record<string, any> = {
  grass: "#2fd9b3",
  normal: "#a7a698",
  bug: "#aabb23",
  fire: "#ff4224",
  water: "#429aec",
};

export default CardPokemon;
