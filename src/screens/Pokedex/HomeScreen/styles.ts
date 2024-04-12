import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFF;
`;

export const Card = styled.TouchableOpacity`
  width: 95%;
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
