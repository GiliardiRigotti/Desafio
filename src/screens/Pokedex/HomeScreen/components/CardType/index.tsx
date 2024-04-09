import { Card, Icon, TitleCard } from "./styles";
import { getColorByType } from "../../../../../constants/colours";
import { useNavigation } from "@react-navigation/native";
import { PokemonTypes } from "../../../../../types/listTypes";
import { image } from "../../../../../assets/imgs";
import { useApp } from "../../../../../context/app";
import { StackRoutes } from "../../../../../types/routesTypes";

interface Props {
    pokemonType: PokemonTypes,
}

export function CardType({ pokemonType }: Props) {
    const { navigate } = useNavigation<StackRoutes>()
    const { setType } = useApp()

    const handleNavigationDetail = () => {
        setType(pokemonType.name)
        navigate('ListPokemonScreen', { typeURL: pokemonType.url })
    }

    return (
        <Card
            onPress={handleNavigationDetail}
            style={{
                backgroundColor: getColorByType(pokemonType.name)
            }}
        >
            <Icon
                source={image.pokemonType[pokemonType.name]}
            />
            <TitleCard>
                {pokemonType.name}
            </TitleCard>
        </Card>
    )
}