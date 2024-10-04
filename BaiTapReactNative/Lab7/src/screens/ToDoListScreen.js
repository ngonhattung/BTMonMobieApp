import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import ToDoList from "../components/ToDoList";
import * as apiTodo from "../service/todoService";
const ToDoListScreen = ({ navigation, route }) => {
  const { name, editToDo, addTodo, deleteToDo } = route.params || {};
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    const getTodo = async () => {
      try {
        const result = await apiTodo.todoGet();
        setToDoList(result);
      } catch (error) {
        console.error(error);
      }
    };
    getTodo();
  }, [editToDo, addTodo, deleteToDo]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={25}
          style={{ marginRight: 60 }}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.infoCon}>
          <Image
            source={require("../../assets/Container 71.png")}
            style={{ width: 50, height: 50 }}
          />
          <View style={styles.info}>
            <Text style={styles.txtName}>Hi {name}</Text>
            <Text>Have agreat day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputSearch}>
        <Icon name="search" size={25} style={styles.iconLeft} />
        <TextInput style={styles.inputTextSearch} placeholder="Search" />
      </View>
      <ToDoList todos={toDoList} nav={navigation} />

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("HandleToDo", { title: "ADD YOUR JOB" })
        }
      >
        <Text style={{ fontSize: 50, color: "white" }}>+</Text>
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
  },
  inputSearch: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 8,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoCon: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 60,
  },
  inputTextSearch: {
    flex: 1,
    height: 40,
    paddingLeft: 50,
    color: "grey",
  },
  iconLeft: {
    position: "absolute",
    left: 15,
  },
  txtName: {
    fontSize: 18,
    fontWeight: 700,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "rgba(0, 189, 214, 1)",
  },
});
export default ToDoListScreen;
