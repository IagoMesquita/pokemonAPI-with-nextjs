import Image from "next/image";
import { IResults } from "../../types/pokeApi";

import styles from '../../styles/Pokemon.module.css';

interface Props {
  pokemon: Pokemon;
}

type Pokemon = {
  name: string;
  id: number;
  types: PokemonTypes[];
  height: number;
  weight: number;
};

type PokemonTypes = {
  type: nameType;
};

type nameType = {
  name: string;
};
interface IContext {
  params: pokemonId;
}

type pokemonId = {
  pokemonId: string;
};
export default function Pokemon({ pokemon }: Props) {
  return (
    <div className={ styles.pokemon_container }>
      <h1 className={ styles.title }>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={ styles.types_container }>
          {pokemon.types.map((item, index) => [
            <span key={index}>{item.type.name}</span>,
          ])}
        </div>
      </div>
      <div className={ styles.data_container }>
        <div className={ styles.data_height }>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={ styles.data_weight }>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} Kg</p>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  try {
    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    // params
    // const pokemons: IResults[] = data.results;

    const paths = data.results.map((_pokemon: IResults, index: number) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error: any) {
    console.error("Request API", error.message);
  }
};

export const getStaticProps = async ({ params }: IContext) => {
  const id = params.pokemonId;
  const api = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const res = await fetch(api);
    const data = await res.json();

    console.log("POKEMON", data);

    return {
      props: { pokemon: data },
    };
  } catch (error: any) {
    console.error("Request API", error.message);
  }
};
