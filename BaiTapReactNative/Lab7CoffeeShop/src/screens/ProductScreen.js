import { View, StyleSheet, Pressable, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import * as apiShop from "../api/shopApi";
import { useNavigation } from "@react-navigation/native";
const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params || {};
  const [listProduct, setListProduct] = useState([]);
  const [listProductOrder, setListProductOrder] = useState([]);
  useEffect(() => {
    const getShop = async () => {
      try {
        const result = await apiShop.getShopByID(id);
        setListProduct(
          result.productList.map((product) => ({ ...product, quantity: 0 }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getShop();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    setListProduct((prevList) =>
      prevList.map((product) =>
        product.productID === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
    setListProductOrder((prevList) => {
      const existingProduct = prevList.find(
        (product) => product.productID === productId
      );
      if (newQuantity > 0) {
        if (existingProduct) {
          console.log(
            prevList.map((product) =>
              product.productID === productId
                ? { ...product, quantity: newQuantity }
                : product
            )
          );
          return prevList.map((product) =>
            product.productID === productId
              ? { ...product, quantity: newQuantity }
              : product
          );
        } else {
          const newProduct = listProduct.find(
            (product) => product.productID === productId
          );
          console.log([...prevList, { ...newProduct, quantity: newQuantity }]);
          return [...prevList, { ...newProduct, quantity: newQuantity }];
        }
      } else {
        console.log(
          prevList.filter((product) => product.productID !== productId)
        );
        return prevList.filter((product) => product.productID !== productId);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Header title={"Drinks"} />
      <ProductList
        products={listProduct}
        onQuantityChange={handleQuantityChange}
      />
      <Pressable
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Order", { orderedProducts: listProductOrder })
        }
      >
        <Text style={{ color: "white", fontSize: 20 }}>GO TO CART</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btn: {
    backgroundColor: "#EFB034",
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default ProductScreen;
