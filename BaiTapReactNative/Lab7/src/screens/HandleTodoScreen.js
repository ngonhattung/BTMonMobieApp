import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useId, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as apiTodo from "../service/todoService";
const HandleTodoScreen = ({ navigation, route }) => {
  const { title, todo } = route.params || {};
  const [titleTXT, setTitleTXT] = useState("");
  const id = useId();
  const handleToDo = async () => {
    if (todo) {
      try {
        const updatedTitle = titleTXT.length === 0 ? todo.title : titleTXT;
        const todoEdit = { ...todo, title: updatedTitle };
        const result = await apiTodo.editTodo(todoEdit);
        navigation.navigate("ToDoList", { editToDo: result });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const newtodo = {
          id: id,
          title: titleTXT,
        };
        const result = await apiTodo.addTodo(newtodo);
        navigation.navigate("ToDoList", { addTodo: result });
      } catch (error) {}
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
        <Icon name="arrow-left" size={25} onPress={() => navigation.goBack()} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginVertical: 40,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.inputSearch}>
          <Icon name="list-alt" size={25} style={styles.iconLeft} />
          <TextInput
            style={styles.inputTextSearch}
            placeholder="input your job"
            onChangeText={(newTitle) => setTitleTXT(newTitle)}
            defaultValue={todo ? todo.title : ""}
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Pressable style={styles.button} onPress={handleToDo}>
          <Text style={{ color: "white" }}>FINISH</Text>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../../assets/Image 96.png")}
          style={{ width: 200, height: 200 }}
        />
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
    justifyContent: "space-between",
  },
  infoCon: {
    flexDirection: "row",
    alignItems: "center",
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
    color: "green",
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
export default HandleTodoScreen;
