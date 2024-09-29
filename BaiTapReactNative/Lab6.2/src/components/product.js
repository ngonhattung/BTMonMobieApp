import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const product = ({ product }) => {
  return (
    <View style={styles.item}>
      <Image source={product.img} style={styles.img} />
      <Text>{product.productName}</Text>
      <View style={styles.ratingCon}>
        <Image source={require("../../assets/Star1.png")} />
        <Image source={require("../../assets/Star1.png")} />
        <Image source={require("../../assets/Star1.png")} />
        <Image source={require("../../assets/Star1.png")} />
        <Image source={require("../../assets/Star5.png")} />
        <Text>({product.feedBack})</Text>
      </View>
      <View style={styles.priceCon}>
        <Text style={{ fontSize: 12, fontWeight: 700 }}>
          {product.price}00đ
        </Text>
        <Text style={{ fontSize: 12, color: "grey" }}>
          -{product.discount}%
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    width: "45%",
  },
  img: {
    width: 150,
    height: 90,
  },
  button: {
    backgroundColor: "#F31111",
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  priceCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default product;
