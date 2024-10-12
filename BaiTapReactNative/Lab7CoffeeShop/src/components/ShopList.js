import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Shop from "./Shop";

const ShopList = ({ shops }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }) => <Shop shop={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    marginTop: "10%",
  },
});
export default ShopList;
