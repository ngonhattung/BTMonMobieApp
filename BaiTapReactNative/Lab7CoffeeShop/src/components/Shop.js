import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Shop = ({ shop }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Product", { id: shop.id })}
      >
        <Image source={shop.img} style={styles.img} />
      </Pressable>

      <View style={styles.statusCon}>
        <View style={styles.status}>
          {shop.status ? (
            <>
              <Image source={require("../assets/Image178.png")} />
              <Text style={{ color: "#1DD75B" }}>Accepting Orders</Text>
            </>
          ) : (
            <>
              <Image source={require("../assets/Image190.png")} />
              <Text style={{ color: "#DE3B40" }}>Tempory Unavailable</Text>
            </>
          )}
        </View>

        <View style={styles.time}>
          <Image
            source={require("../assets/Image184.png")}
            style={{ marginRight: 5 }}
          />
          <Text>5-10 minutes</Text>
        </View>

        <Image
          source={require("../assets/Image181.png")}
          style={{ marginRight: 5 }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          paddingLeft: 8,
          paddingBottom: 4,
        }}
      >
        {shop.coffeeName}
      </Text>
      <Text style={{ color: "#171A1F", fontSize: 14, paddingLeft: 8 }}>
        {shop.address}
      </Text>
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
  },
  img: {
    width: "100%",
    height: 100,
  },
  statusCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  status: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  time: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },
});
export default Shop;
