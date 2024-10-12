import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
const OrderScreen = ({ route }) => {
  const { orderedProducts } = route.params || {};
  const totalPrice = orderedProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <View style={styles.container}>
      <Header title={"Your orders"} />
      <View style={styles.boxDeli}>
        <View style={styles.box}>
          <Text style={styles.boxText}>CAFE DELIVERY</Text>
          <Text style={styles.boxText}>Order #18</Text>
        </View>
        <Text style={[styles.boxText, { alignSelf: "center", fontSize: 20 }]}>
          $5
        </Text>
      </View>
      <View style={styles.boxPrice}>
        <View style={styles.box}>
          <Text style={styles.boxText}>CAFE DELIVERY</Text>
          <Text style={styles.boxText}>Order #18</Text>
        </View>
        <Text style={[styles.boxText, { alignSelf: "center", fontSize: 20 }]}>
          ${totalPrice}
        </Text>
      </View>
      <ProductList products={orderedProducts} />
      <Pressable style={styles.btn}>
        <Text style={{ color: "white", fontSize: 20 }}>PAY NOW</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxDeli: {
    backgroundColor: "#00BDD6",
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    height: 100,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  box: {
    justifyContent: "space-around",
  },
  boxText: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
  },
  boxPrice: {
    backgroundColor: "#8353E2",
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    height: 100,
    borderRadius: 10,
    justifyContent: "space-between",
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
export default OrderScreen;
