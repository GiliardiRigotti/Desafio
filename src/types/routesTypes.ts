import { StackNavigationProp } from "@react-navigation/stack"
import { PokemonDetail } from "./pokemonDetail";

type IRootStack = {
    HomeScreen: undefined,
    ListPokemonScreen: { typeURL: string },
    PokemonDetailScreen: { pokemon: PokemonDetail }
};

export type StackRoutes = StackNavigationProp<IRootStack>