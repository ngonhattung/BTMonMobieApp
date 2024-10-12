import { View, Text } from "react-native";
import React from "react";
import axios from "axios";
export const getShop = async () => {
  try {
    const { data: response } = await axios.get(
      "https://6708def78e86a8d9e4305617.mockapi.io/coffee"
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
export const getShopByID = async (id) => {
  try {
    const { data: response } = await axios.get(
      "https://6708def78e86a8d9e4305617.mockapi.io/coffee/" + id
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
