import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Todo from "./Todo";
const ToDoList = ({ todos, nav }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} navigation={nav} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    marginTop: "10%",
  },
});
export default ToDoList;
