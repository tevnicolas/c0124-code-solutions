type Props = {
  pokedex: { number: string; name: string }[];
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon, index) => (
    <li key={pokedex[index].number}>{pokedex[index].name}</li>
  ));
  return <ul>{listItems}</ul>;
}
