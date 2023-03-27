import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer";
import { RestaurantInfoCard } from "../components/restaurant-Info-Card";
import { SafeView } from "../../../components/utility/SafeView";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeView>
      <SearchView>
        <Searchbar />
      </SearchView>

      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeView>
  );
};
