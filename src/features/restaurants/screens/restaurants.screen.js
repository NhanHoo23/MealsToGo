import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-Info-Card";

const SafeView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled(View)`
  padding: 16px;
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeView>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeView>
  );
};
