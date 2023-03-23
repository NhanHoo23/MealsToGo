import React from "react";
import { SafeAreaView, FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer";
import { RestaurantInfoCard } from "../components/restaurant-Info-Card";

const SafeView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeView>
      <SearchView>
        <Searchbar />
      </SearchView>

      <FlatList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeView>
  );
};
