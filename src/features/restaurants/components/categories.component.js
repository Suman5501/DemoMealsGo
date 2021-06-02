import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";

const categoryIcons = [
  <MaterialIcons name="flight" size={25} color="tomato" />,
  <MaterialIcons name="beach-access" size={25} color="tomato" />,
  <MaterialIcons name="near-me" size={25} color="tomato" />,
  <MaterialIcons name="place" size={25} color="tomato" />,
];

const CategoryContainer = styled.View`
  margin-vertical: ${(props) => props.theme.space[4]};
  margin-horizontal: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
`;
const IconContainer = styled.View`
  height: 60px;
  width: 60px;
  background-color: grey;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ListCategories = () => {
  return (
    <CategoryContainer>
      {categoryIcons.map((icon, index) => (
        <IconContainer key={index}>{icon}</IconContainer>
      ))}
    </CategoryContainer>
  );
};
