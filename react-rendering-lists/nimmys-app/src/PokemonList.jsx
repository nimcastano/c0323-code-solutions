export default function PokemonList({ pokedex }) {
  const pokeList = pokedex.map((el) => <li key={el.number}>{el.name}</li>);

  return <ul>{pokeList}</ul>;
}
