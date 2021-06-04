import React from "react";
import { Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FavsWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavsWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="large">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavsWrapper>
  );
};
