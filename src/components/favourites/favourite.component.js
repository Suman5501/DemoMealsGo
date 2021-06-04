import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favourites/fav.context";
import { restaurantsRequest } from "../../services/restaurants/restaurant.service";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFav = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFav ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        size={24}
        color={isFav ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
