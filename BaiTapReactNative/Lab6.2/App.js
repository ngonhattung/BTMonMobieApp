import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native";
import * as apiProduct from "./src/service/productService";
import ProductList from "./src/components/productList";
import { TextInput } from "react-native-web";
export default function App() {
  const [dataP, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiProduct.getProduct();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <Image
            source={require("./assets/ant-design_arrow-left-outlined.png")}
          />
          <View style={styles.textInputCon}>
            <Image
              style={styles.icon}
              source={require("./assets/whh_magnifier.png")}
            />
            <TextInput style={styles.textInput} placeholder="Dây cáp usd" />
          </View>
          <Image source={require("./assets/bi_cart-check.png")} />
          <Image source={require("./assets/detail1.png")} />
        </View>
      </View>
      <ProductList products={dataP} />
      <View style={styles.footer}>
        <View style={styles.nav}>
          <Image source={require("./assets/detail.png")} />
          <Image source={require("./assets/home.png")} />
          <Image source={require("./assets/back.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "grey",
  },
  nav: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  textInputCon: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  textInput: {
    flex: 1,
    height: 30,
    paddingLeft: 50,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});
