import { SafeAreaView, FlatList, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Product from "./Product";
const ProductList = ({ products, onQuantityChange }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Product product={item} onQuantityChange={onQuantityChange} />
        )}
        keyExtractor={(item) => item.productID}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    marginTop: "5%",
  },
});
export default ProductList;
