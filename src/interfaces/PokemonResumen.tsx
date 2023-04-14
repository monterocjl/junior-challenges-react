type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonResumen = {
  id: number;
  name: string;
  types: Type[];
  img_url: string;
};
export type { PokemonResumen };
