import { View, Text } from "react-native";
import axios from "axios";

export const getProduct = async () => {
  try {
    const { data: response } = await axios.get(
      "https://64599b8995624ceb21ebe122.mockapi.io/itemLab6_2Mobie"
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
