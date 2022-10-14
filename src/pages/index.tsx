import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface PokemonsProps {
  pokemons: IResults[];
}
interface IResults {
  name: string;
  url: string;
  id?: number;
}

const Home: NextPage<PokemonsProps> = ({ pokemons }: PokemonsProps) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokeball"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  // Add id
  const pokemons: IResults[] = data.results;
  pokemons.forEach((item, index) => (item.id = index + 1));

  return {
    props: { pokemons },
  };
}

export default Home;
