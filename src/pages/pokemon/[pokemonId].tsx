import { useRouter } from "next/router"


export default function Pokemon() {
  const { query } = useRouter();
  return (
    <h1>Pokemon de ID: {query.pokemonId}</h1>
  )
}
