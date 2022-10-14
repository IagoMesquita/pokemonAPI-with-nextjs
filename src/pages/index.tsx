import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface PokemonsProps {
  pokemons: IResults[]
}
interface IResults {
  name:string;
  url: string;
  id?: number;
}

const Home: NextPage<PokemonsProps> = ({pokemons}: PokemonsProps) => {
  return (
  <>
    <h1>Hello World!</h1>
    {pokemons.map((pokemon) => (
      <p key={pokemon.id}>{pokemon.name}</p>
    ))}
  </>

  )
}

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  // Add id
  const pokemons: IResults[] = data.results;
  pokemons.forEach((item, index) => item.id = index + 1);

  return {
    props: {  pokemons },
  }

}

export default Home
