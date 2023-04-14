import type { PokemonDetails } from "../interfaces/PokemonDetails";
import type { PokemonResponse } from "../interfaces/PokemonResponse";
import type { PokemonResumen } from "../interfaces/PokemonResumen";

const BASE_URL = process.env.REACT_APP_BASE_URL as string;

const getAllPokemon = async (): Promise<PokemonResponse[] | undefined> => {
  try {
    const response = await fetch(BASE_URL);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const getResumePokemon = async (
  pokemonUrl: string
): Promise<PokemonResumen | undefined> => {
  try {
    const response = await fetch(pokemonUrl);
    const { id, name, types, sprites } = await response.json();
    const { other } = sprites;
    const { "official-artwork": official } = other;
    const { front_default: img_url } = official;
    const pokemonResumen: PokemonResumen = { id, name, types, img_url };

    return pokemonResumen;
  } catch (error) {
    console.log(error);
  }
};

const getSinglePokemon = async (
  pokemonId: string
): Promise<PokemonDetails | undefined> => {
  try {
    const response = await fetch(BASE_URL + `/${pokemonId}`);
    const { id, name, order, weight, height, types, moves, stats, sprites } =
      await response.json();
    const { other } = sprites;
    const { "official-artwork": official } = other;
    const { front_default: img_url } = official;
    const pokemonDetails: PokemonDetails = {
      id,
      name,
      order,
      weight,
      height,
      types,
      moves,
      stats,
      img_url,
    };

    return pokemonDetails;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPokemon, getResumePokemon, getSinglePokemon };
