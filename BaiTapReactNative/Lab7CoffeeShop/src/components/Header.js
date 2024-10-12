import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Button70.png")} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <Image source={require("../assets/Image177.png")} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
});
export default Header;
