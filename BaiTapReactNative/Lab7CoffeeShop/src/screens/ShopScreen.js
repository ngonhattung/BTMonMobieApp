import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShopList from "../components/ShopList";
import * as apiShop from "../api/shopApi";
const ShopScreen = () => {
  const [listShop, setListShop] = useState([]);
  useEffect(() => {
    const getShop = async () => {
      try {
        const result = await apiShop.getShop();
        setListShop(result);
      } catch (error) {
        console.error(error);
      }
    };
    getShop();
  }, []);
  return (
    <View style={styles.container}>
      <Header title={"Shops Near Me"} />
      <ShopList shops={listShop} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default ShopScreen;
