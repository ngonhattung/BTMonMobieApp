import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import vs_black from "../assets/images/vs_black.png";
import star from "../assets/images/star.png";
import more from "../assets/images/readmore.png";
import vector from "../assets/images/Vector.png";
const { width } = Dimensions.get("window");
const HomeScreen = ({ navigation, route }) => {
  const { data } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={data ? data : vs_black}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textInfo}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <Image source={star} style={styles.imgStar} />
            <Image source={star} style={styles.imgStar} />
            <Image source={star} style={styles.imgStar} />
            <Image source={star} style={styles.imgStar} />
            <Image source={star} style={styles.imgStar} />
          </View>
          <View>
            <Text style={[styles.textInfo, { marginLeft: 30 }]}>
              (Xem 828 đánh giá)
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>1.790.000 đ</Text>
          <Text
            style={[
              styles.textInfo,
              {
                marginLeft: 20,
                textDecorationLine: "line-through",
                color: "grey",
              },
            ]}
          >
            1.790.000 đ
          </Text>
        </View>
        <View style={styles.exploreContainer}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#FA0000",
              marginRight: 30,
            }}
          >
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image source={more} style={styles.imgStar} />
        </View>
        <View style={styles.btnChooseColorCon}>
          <Pressable
            style={styles.btnChooseColor}
            onPress={() => navigation.navigate("ChooseColorScreen")}
          >
            <Text style={{ fontSize: 15 }}>4 MÀU-CHỌN MÀU</Text>
          </Pressable>
          <Image source={vector} style={styles.imgVector} />
        </View>
        <View style={styles.btnBuyCon}>
          <Pressable style={styles.btnBuy}>
            <Text style={styles.textBuy}>CHỌN MUA</Text>
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
    padding: 20,
  },
  infoContainer: {
    padding: 8,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  img: {
    width: width * 1,
    height: width * 0.7,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  imgStar: {
    marginRight: 5,
  },
  textInfo: {
    fontSize: 15,
    fontWeight: 400,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  exploreContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  btnChooseColorCon: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
  },
  btnChooseColor: {
    height: 35,
    justifyContent: "center",
  },
  imgVector: {
    position: "absolute",
    right: 15,
  },
  btnBuyCon: {},
  btnBuy: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#EE0A0A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
  },
  textBuy: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FFF",
  },
});

export default HomeScreen;
