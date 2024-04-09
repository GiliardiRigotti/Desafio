import { useEffect, useState } from "react";
import { ListPokemon, Pokemon } from "../../../../../types/listPokemon";
import { Card, Id, ImageCard, TitleCard } from "./styles";
import axios from "axios";
import { getColorByType } from "../../../../../constants/colours";
import { PokemonDetail } from "../../../../../types/pokemonDetail";
import { ActivityIndicator, Image } from "react-native";
import { Loading } from "../../../../../components/Loading";
import { useNavigation } from "@react-navigation/native";

interface Props {
    pokemon: Pokemon,
    type: string
}

export function CardPokemon({ pokemon, type }: Props) {
    const { navigate } = useNavigation()
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(null)

    const handleNavigationDetail = () => {
        navigate('PokemonDetailScreen', { pokemon: pokemonDetail })
    }

    useEffect(() => {
        (async () => {
            const response = await axios.get<PokemonDetail>(pokemon.url)
            setPokemonDetail(response.data)
        })()
    }, [])

    return (
        <Card
            onPress={handleNavigationDetail}
            style={{
                backgroundColor: getColorByType(type)
            }}
        >
            {!!pokemonDetail ?
                <>
                    <ImageCard
                        source={{
                            uri: pokemonDetail.sprites.front_default || pokemonDetail.sprites.front_female
                        }}
                    />
                    <TitleCard>
                        {pokemonDetail.name.replaceAll('-', ' ')}
                    </TitleCard>
                    <Id>
                        #{pokemonDetail.id}
                    </Id>
                </>
                :
                <Loading />
            }


        </Card>
    )
}