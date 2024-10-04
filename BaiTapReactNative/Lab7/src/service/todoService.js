import React from "react";
import axios from "axios";
export const todoGet = async () => {
  try {
    const { data: response } = await axios.get(
      "https://64599b8995624ceb21ebe122.mockapi.io/todo"
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const { data: response } = await axios.post(
      "https://64599b8995624ceb21ebe122.mockapi.io/todo",
      newTodo
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
export const editTodo = async (todo) => {
  try {
    const { data: response } = await axios.put(
      "https://64599b8995624ceb21ebe122.mockapi.io/todo/" + todo.id,
      todo
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data: response } = await axios.delete(
      "https://64599b8995624ceb21ebe122.mockapi.io/todo/" + id
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
