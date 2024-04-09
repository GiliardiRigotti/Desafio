export type ListPokemonTypes = {
  count: number
  next: any
  previous: any
  results: PokemonTypes[]
}

export type PokemonTypes = {
  name: string
  url: string
}