import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Cafe world</Text>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/Image.png")} style={styles.img} />
        <Image source={require("../assets/Image(1).png")} style={styles.img} />
        <Image source={require("../assets/Image(2).png")} style={styles.img} />
      </View>
      <Pressable style={styles.btn} onPress={() => navigation.navigate("Shop")}>
        <Text style={{ color: "white" }}>GET STARTED</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 30,
  },
  imgContainer: {},
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  img: {
    marginVertical: 30,
  },
  btn: {
    backgroundColor: "#00BDD6",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
export default HomeScreen;
