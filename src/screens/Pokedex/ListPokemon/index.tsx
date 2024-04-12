import { useApp } from "../../../context/app";
import { Container, List } from "./styles";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { CardPokemon } from "./components/CardPokemon";
import { Loading } from "../../../components/Loading";
import { getColorByType } from "../../../constants/colours";

export function ListPokemonScreen() {
    const { isLoading, getListPokemon, listPokemon, type } = useApp()
    const route = useRoute()
    const { typeURL } = route.params as { typeURL: string }

    useEffect(() => {
        (async () => {
            getListPokemon(typeURL)
        })()
    }, [])

    if (isLoading) {
        return (
            <Container
                style={{
                    backgroundColor: getColorByType(type)
                }}
            >
                <Loading />
            </Container>
        )
    }
    return (
        <Container>
            <List
                data={listPokemon}
                keyExtractor={item => item.pokemon.name}
                renderItem={({ item }) => (
                    <CardPokemon
                        pokemon={item.pokemon}
                        type={type}
                    />
                )}
                numColumns={3}
            />
        </Container>
    )
}