import { useApp } from "../../../context/app";
import { Container, List, Title } from "./styles";
import { CardType } from "./components/CardType";
import { Loading } from "../../../components/Loading";

export function HomeScreen() {
    const { isLoading, listPokemonTypes } = useApp()

    if (isLoading) {
        return (
            <Container>
                <Loading />
            </Container>
        )
    }

    return (
        <Container>
            <Title>Select a type</Title>
            <List
                data={listPokemonTypes}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <CardType pokemonType={item} />
                )}
                numColumns={3}
            />
        </Container>
    )
}