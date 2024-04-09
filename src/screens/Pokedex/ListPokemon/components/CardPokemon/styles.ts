import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  align-self: center;
  margin-top: 10px;
  padding: 3px;
`;

export const TitleCard = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  padding-bottom: 5px;
`;

export const ImageCard = styled.Image`
  width: 90%;
  height: 70px;
  object-fit: contain;
  padding-top: 5px;
`;

export const Id = styled.Text`
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 5px;
  background-color: #00000026;
  border-radius: 5px;
  padding: 3px;
`;