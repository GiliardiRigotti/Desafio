import { useEffect, useState } from "react";
import { Pokemon } from "../../../../../types/listPokemon";
import { BlurClose, ButtonClose, Card, CardModal, Id, IdModal, ImageCard, ImageCardModal, ModalContainer, TitleCard, TitleCardModal } from "./styles";
import axios from "axios";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { getColorByType } from "../../../../../constants/colours";
import { PokemonDetail } from "../../../../../types/pokemonDetail";
import { Modal } from "react-native";
import { Loading } from "../../../../../components/Loading";

interface Props {
    pokemon: Pokemon,
    type: string
}

export function CardPokemon({ pokemon, type }: Props) {
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(null)
    const [images, setImages] = useState<string[]>([])
    const [modalCard, setModalCard] = useState<boolean>(false)

    const handleOpenCloseDetail = () => {
        setModalCard(!modalCard)
    }

    useEffect(() => {
        (async () => {
            const response = await axios.get<PokemonDetail>(pokemon.url)
            setPokemonDetail(response.data)
            setImages(Object.values(response.data.sprites))
        })()
    }, [])

    return (
        <Card
            onPress={handleOpenCloseDetail}
            style={{
                backgroundColor: getColorByType(type)
            }}
        >
            {images.length > 0 && !!pokemonDetail ?
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

            <Modal
                visible={modalCard}
                transparent
            >
                <ModalContainer>
                    <BlurClose
                        onPress={handleOpenCloseDetail}
                    />
                    <CardModal
                        style={{
                            backgroundColor: getColorByType(type)
                        }}
                    >
                        <ButtonClose
                            onPress={handleOpenCloseDetail}
                        >
                            <Icon
                                name='close-box'
                                size={30}
                                color={'#494949d2'}
                            />
                        </ButtonClose>
                        {images.length > 0 && !!pokemonDetail &&
                            <>
                                <ImageCardModal
                                    source={{
                                        uri: pokemonDetail.sprites.front_default
                                    }}
                                />
                                <TitleCardModal>
                                    {pokemonDetail.name.replaceAll('-', ' ')}
                                </TitleCardModal>
                                <IdModal>
                                    #{pokemonDetail.id}
                                </IdModal>
                            </>
                        }
                    </CardModal>
                </ModalContainer>
            </Modal>
        </Card>
    )
}