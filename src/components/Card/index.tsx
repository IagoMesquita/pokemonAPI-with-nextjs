import Image from "next/image";
import Link from "next/link";
import { IResults } from "../../types/pokeApi";

import styles from './styles.module.css';

interface Props {
  pokemon: IResults;
}

export default function Card({ pokemon }: Props) {
  return (
    <div className={ styles.card }>
      <Image
        // src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={ styles.id }>#{pokemon.id}</p>
      <h3 className={ styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={ styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}
