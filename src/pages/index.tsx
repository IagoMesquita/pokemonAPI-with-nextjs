import type { NextPage } from "next";
import Image from "next/image";
import { IResults } from "../types/pokeApi";

import Card from "../components/Card";

import styles from "../styles/Home.module.css";
interface PokemonsProps {
  pokemons: IResults[];
}

const Home: NextPage<PokemonsProps> = ({ pokemons }: PokemonsProps) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <span>
          <Image
            src="/images/pokeball.png"
            width="50"
            height="50"
            alt="pokeball"
          />
        </span>
      </div>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  try {
    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    // Add id
    const pokemons: IResults[] = data.results;
    pokemons.forEach((item, index) => (item.id = index + 1));

    return {
      props: { pokemons },
    };
  } catch (error: any) {
    console.error("Request API", error.message);
  }
}

export default Home;
