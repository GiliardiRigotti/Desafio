import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ListPokemonTypes, PokemonTypes } from "../types/listTypes";
import { ListPokemon } from "../types/listPokemon";


interface IAppContext {
    isLoading: boolean
    listPokemonTypes: PokemonTypes[]
    listPokemon: any[]
    type: string
    getListPokemon: (type: string) => Promise<void>
    setType: React.Dispatch<React.SetStateAction<string>>

}

interface IAppProvider {
    children?: React.JSX.Element
}

const AppContext = createContext({} as IAppContext)

export const AppProvider: React.FC<{}> = ({ children }: IAppProvider) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [listPokemonTypes, setListPokemonTypes] = useState<PokemonTypes[]>([])
    const [listPokemon, setListPokemon] = useState<ListPokemon[]>([])
    const [type, setType] = useState<string>('')

    const getListPokemon = useCallback(async (typeURL: string) => {
        setIsLoading(true)
        try {
            const response = await axios.get<{ pokemon: ListPokemon[] }>(typeURL)
            setListPokemon(response.data.pokemon)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const response = await axios.get<ListPokemonTypes>('https://pokeapi.co/api/v2/type/')
                console.log(response.data.results)
                const filteredShadown = response.data.results.filter((item) => item.name !== 'shadow')
                const filtered = filteredShadown.filter((item) => item.name !== 'unknown')
                setListPokemonTypes(filtered)
            } catch (error: any) {
                console.log(error.response.data)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [])

    return (
        <AppContext.Provider value={{ isLoading, listPokemonTypes, listPokemon, type, getListPokemon, setType }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    return context
}