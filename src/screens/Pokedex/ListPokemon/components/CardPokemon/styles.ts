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

export const CardModal = styled.View`
  width: 55%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const ModalContainer = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const ImageCardModal = styled.Image`
  width: 100%;
  height: 250px;
  object-fit: contain;
  padding-top: 5px;
  align-self: center;
`;

export const ButtonClose = styled.TouchableOpacity`
  padding: 5px;
  align-self: flex-end;
`;

export const TitleCardModal = styled.Text`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
  padding-bottom: 5px;
`;

export const IdModal = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 5px;
  background-color: #00000026;
  border-radius: 5px;
  padding: 5px;
`;

export const BlurClose = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000c3;
`;