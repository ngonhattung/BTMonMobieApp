import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
const Item = ({ list }) => (
  <View style={styles.item}>
    <Image source={list.image} style={styles.img} />
    <View style={{ alignSelf: "flex-start" }}>
      <Text>{list.productName}</Text>
      <Text style={{ marginTop: 10 }}>
        Shop:
        <Text style={{ color: "red" }}> {list.shopName}</Text>
      </Text>
    </View>
    <Pressable style={styles.button}>
      <Text style={{ color: "white" }}>CHAT</Text>
    </Pressable>
  </View>
);
export default function App() {
  const [dataP, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://64599b8995624ceb21ebe122.mockapi.io/itemLab6Mobie"
        );
        console.log(response);
        setData(response);
      } catch (error) {
        console.error(error.message);
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
          <Text style={{ color: "white" }}>Chat</Text>
          <Image source={require("./assets/bi_cart-check.png")} />
        </View>
        <Text
          style={{
            marginVertical: 10,
            marginHorizontal: 30,
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>

      <FlatList
        data={dataP}
        renderItem={({ item }) => <Item list={item} />}
        keyExtractor={(item) => item.id}
      />

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
  item: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 32,
  },
  nav: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F31111",
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
