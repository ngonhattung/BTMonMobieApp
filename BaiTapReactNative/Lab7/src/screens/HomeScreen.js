import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Image source={"https://picsum.photos/200/300"} style={styles.img} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>MANAGE YOUR</Text>
        <Text style={styles.title}>TASK</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={25} style={styles.iconLeft} />
        <TextInput
          style={styles.inpupText}
          placeholder="Enter your name"
          onChangeText={(newName) => setName(newName)}
          defaultValue={name}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("ToDoList", { name: name });
        }}
      >
        <Text style={{ color: "white" }}>GET START</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 8,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  inpupText: {
    flex: 1,
    height: 40,
    paddingLeft: 50,
    color: "grey",
  },
  iconLeft: {
    position: "absolute",
    left: 15,
  },
  img: {
    width: "60%",
    height: "40%",
  },
  title: {
    fontSize: "24",
    color: "#8353E2",
    fontWeight: 700,
  },
  button: {
    backgroundColor: "#00BDD6",
    width: "60%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default HomeScreen;
