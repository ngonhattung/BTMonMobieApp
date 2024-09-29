import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductItem from "./product";
const productList = ({ products }) => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default productList;
