import { useApp } from "../../../context/app";
import { ButtonGoBack, Container, List, TitleButtonGoBack } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { CardPokemon } from "./components/CardPokemon";
import { Loading } from "../../../components/Loading";
import { getColorByType } from "../../../constants/colours";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

export function ListPokemonScreen() {
    const navigation = useNavigation()
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
            <ButtonGoBack>
                <Icon
                    name='menu-left-outline'
                    size={45}
                    color={'#494949d2'}
                />
                <TitleButtonGoBack
                    onPress={() => navigation.goBack()}
                >
                    Back
                </TitleButtonGoBack>
            </ButtonGoBack>
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