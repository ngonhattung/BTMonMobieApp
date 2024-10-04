import { View, StyleSheet, TextInput, Alert } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as apiTodo from "../service/todoService";
const Todo = ({ todo, navigation }) => {
  const deleteTodo = async () => {
    const confirm = window.confirm("Do you want to delete this todo?");
    if (confirm) {
      const result = await apiTodo.deleteTodo(todo.id);
      navigation.navigate("ToDoList", { deleteToDo: result });
    } else {
      console.log("Cancel Pressed");
    }
  };
  return (
    <View style={styles.todoCon}>
      <Icon name="check-square" size={25} style={styles.iConLeft} />
      <TextInput style={styles.input} value={todo.title} />
      <Icon
        name="trash"
        size={25}
        style={{ position: "absolute", right: 60, color: "red" }}
        onPress={deleteTodo}
      />
      <Icon
        name="edit"
        size={25}
        style={styles.iConRight}
        onPress={() =>
          navigation.navigate("HandleToDo", {
            title: "EDIT YOUR JOB",
            todo: todo,
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  todoCon: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(222, 225, 230, 0.47)",
    borderRadius: 10,
    marginVertical: 8,
    padding: 8,
  },
  input: {
    flex: 1,
    height: 30,
    paddingLeft: 40,
  },
  iConLeft: {
    position: "absolute",
    left: 15,
    color: "green",
  },
  iConRight: {
    position: "absolute",
    right: 15,
    color: "red",
  },
});
export default Todo;
