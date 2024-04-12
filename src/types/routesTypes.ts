import { StackNavigationProp } from "@react-navigation/stack"
import { PokemonDetail } from "./pokemonDetail";

type IRootStack = {
    HomeScreen: undefined,
    ListPokemonScreen: { typeURL: string }
};

export type StackRoutes = StackNavigationProp<IRootStack>