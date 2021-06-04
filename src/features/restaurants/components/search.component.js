import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useContext } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { useState, useEffect } from "react";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavsToggled, onFavsToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavsToggled ? "heart" : "heart-outline"}
        onIconPress={onFavsToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
