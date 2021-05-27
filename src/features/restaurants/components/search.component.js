import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useContext } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  //   console.log(keyword);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    search(searchKeyword);
  },[]);

  return (
    <SearchContainer>
      <Searchbar
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