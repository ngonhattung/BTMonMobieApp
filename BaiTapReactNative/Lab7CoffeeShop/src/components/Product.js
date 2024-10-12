import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

const Product = ({ product, onQuantityChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}></View>
      <View style={styles.infoCon}>
        <Text>{product.productName}</Text>
        <Text>${product.price}</Text>
      </View>
      <View style={styles.quantityCon}>
        <Pressable
          style={styles.btnQua}
          onPress={() =>
            onQuantityChange(
              product.productID,
              Math.max(product.quantity - 1, 0)
            )
          }
        >
          <Text style={styles.btnTextQua}>-</Text>
        </Pressable>
        <Text style={{ paddingHorizontal: 5 }}>{product.quantity}</Text>
        {/* <TextInput
          value={product.quantity}
          onChangeText={(value) => setQty(value)}
          style={{ width: 30, textAlign: "center" }}
        /> */}

        <Pressable
          style={styles.btnQua}
          onPress={() =>
            onQuantityChange(
              product.productID,
              Math.min(product.quantity + 1, 10)
            )
          }
        >
          <Text style={styles.btnTextQua}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  img: {
    width: 60,
    height: 60,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
  },
  infoCon: {
    justifyContent: "space-between",
    padding: 5,
  },
  quantityCon: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 20,
    justifyContent: "center",
  },
  btnQua: {
    height: 20,
    width: 20,
    backgroundColor: "#0FA958",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: 10,
  },
  btnTextQua: {
    color: "white",
    fontSize: 15,
  },
});
export default Product;
