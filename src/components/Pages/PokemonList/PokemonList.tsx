import { useEffect, useState } from "react";
import { getAllPokemon } from "../../../services/pokemon";
import Layout from "../../Layout/Layout";
import CardPokemon from "../../CardPokemon/CardPokemon";
import { PokemonResponse } from "../../../interfaces/PokemonResponse";
import { Container, Heading } from "./StyledComponents";

interface PokemonListState {
  PokemonList: PokemonResponse[];
}

const PokemonList = () => {
  const [pokemonToShow, setPokemonToShow] =
    useState<PokemonListState["PokemonList"]>();

  useEffect(() => {
    const showAllPokemon = async () => {
      const response = await getAllPokemon();
      if (response !== undefined) {
        setPokemonToShow(response);
      }
    };

    showAllPokemon();
  }, []);

  if (pokemonToShow === undefined) {
    return <div>Cargando</div>;
  }

  return (
    <Layout>
      <>
        <Heading>Pokedex</Heading>
        <Container>
          {pokemonToShow.map((pokemon, index) => {
            return <CardPokemon key={index} pokemon={pokemon} />;
          })}
        </Container>
      </>
    </Layout>
  );
};

export default PokemonList;
