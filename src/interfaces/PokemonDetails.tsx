type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Move = {
  move: {
    name: string;
  };
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonDetails = {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  types: Type[];
  moves: Move[];
  stats: Stat[];
  img_url: string;
};

export type { PokemonDetails };
