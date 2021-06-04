import React, { useContext } from "react";
import styled from "styled-components/native";

import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../../features/restaurants/components/restaurant-info-card.component";

import { FavouritesContext } from "../../../services/favourites/fav.context";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
