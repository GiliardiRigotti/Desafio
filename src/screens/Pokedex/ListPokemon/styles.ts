import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PokemonTypes } from '../../../types/listTypes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const Card = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 5px;
  border-radius: 49px;
  align-self: center;
`;

export const TitleCard = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const List = (styled.FlatList.attrs({
  columnWrapperStyle: {
    flex: 1,
    justifyContent: "space-around"
  }
})`
  width: 100%;
` as unknown) as typeof FlatList;

export const ButtonGoBack = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;

export const TitleButtonGoBack = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: #494949d2;
`;
