import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { Text } from "../../../components/typography/text.component";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../infastructure/theme/colors";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { useContext } from "react";
import { Search } from "../components/search.component";
import { ListCategories } from "../components/categories.component";
import { useState } from "react/cjs/react.development";
import { FavouritesContext } from "../../../services/favourites/fav.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 60%;
  left: 50%;
`;
const Header = styled.View`
  padding-vertical: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  flex-direction: row;
  background-color: tomato;
  justify-content: space-between;
`;

const HeaderContainer = styled.View`
  flex-direction: column;
  padding-left: ${(props) => props.theme.space[3]};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

const MainContainer = styled.View`
  background-color: tomato;
  height: 120px;
  margin-bottom: 20px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Header>
        <MaterialIcons name="sort" size={28} color={colors.ui.quaternary} />
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={colors.ui.quaternary}
        />
      </Header>
      <MainContainer>
        <HeaderContainer>
          <Text center variant="heading">
            Explore the
          </Text>
          <Text center variant="heading">
            Restuarants at places
          </Text>
        </HeaderContainer>
        <Search
          isFavsToggled={isToggled}
          onFavsToggle={() => setIsToggled(!isToggled)}
        />
      </MainContainer>
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {/* <ListCategories /> */}
      <RestaurantList
        data={restaurants}
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
  );
};
