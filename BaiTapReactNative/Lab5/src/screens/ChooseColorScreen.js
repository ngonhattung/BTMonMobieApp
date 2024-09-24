import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import vs_black from "../assets/images/vs_black.png";
import vs_blue from "../assets/images/vs_blue.png";
import vs_red from "../assets/images/vs_red.png";
import vs_silver from "../assets/images/vs_silver.png";
const { width } = Dimensions.get("window");
const ChooseColorScreen = ({ navigation }) => {
  const [info, setInfo] = useState({
    colorText: "Đen",
    supplier: "Tiki Trading",
    price: "1.790.000 đ",
    img: vs_black,
  });
  const chooseColor = () => {
    navigation.navigate("Home", { data: info.img });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={info.img} style={styles.img} resizeMode="contain" />
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <Text style={styles.textInfo}>
            Màu: <Text style={styles.boldText}>{info.colorText}</Text>
          </Text>
          <Text style={styles.textInfo}>
            Cung cấp bởi <Text style={styles.boldText}>{info.supplier}</Text>
          </Text>
          <Text style={[styles.textInfo, { fontWeight: "bold" }]}>
            {info.price}
          </Text>
        </View>
      </View>
      <View style={styles.chooseColorCon}>
        <Text style={{ fontSize: 15, marginBottom: 5 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={styles.boxChoose}>
          <Pressable
            style={[styles.btnChoose, { backgroundColor: "#C5F1FB" }]}
            onPress={() =>
              setInfo((prevData) => ({
                ...prevData,
                colorText: "Bạc",
                img: vs_silver,
              }))
            }
          >
            <Text></Text>
          </Pressable>
          <Pressable
            style={[styles.btnChoose, { backgroundColor: "#F30D0D" }]}
            onPress={() =>
              setInfo((prevData) => ({
                ...prevData,
                colorText: "Đỏ",
                img: vs_red,
              }))
            }
          >
            <Text></Text>
          </Pressable>
          <Pressable
            style={[styles.btnChoose, { backgroundColor: "#000000" }]}
            onPress={() =>
              setInfo((prevData) => ({
                ...prevData,
                colorText: "Đen",
                img: vs_black,
              }))
            }
          >
            <Text></Text>
          </Pressable>
          <Pressable
            style={[styles.btnChoose, { backgroundColor: "#234896" }]}
            onPress={() =>
              setInfo((prevData) => ({
                ...prevData,
                colorText: "Xanh",
                img: vs_blue,
              }))
            }
          >
            <Text></Text>
          </Pressable>
        </View>
        <View style={styles.btnBuyCon}>
          <Pressable style={styles.btnBuy}>
            <Text style={styles.textBuy} onPress={() => chooseColor()}>
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  img: {
    width: width * 0.2,
    height: width * 0.3,
  },
  textInfo: {
    fontSize: 14,
    marginBottom: 2,
    marginTop: 2,
  },
  boxChoose: {
    alignItems: "center",
  },
  btnChoose: {
    width: width * 0.2,
    height: width * 0.2,
    marginTop: 7,
    marginBottom: 7,
  },
  chooseColorCon: {
    backgroundColor: "#C4C4C4",
    padding: 10,
  },
  btnBuy: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textBuy: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FFF",
  },
  boldText: {
    fontWeight: "bold",
  },
});
export default ChooseColorScreen;
