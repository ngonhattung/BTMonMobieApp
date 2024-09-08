import { StatusBar } from "expo-status-bar";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState, useMemo } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function App() {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Male",
        value: "option1",
      },
      {
        id: "2",
        label: "Female",
        value: "option2",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={[
            styles.inputContainer,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "5%",
            },
          ]}
        >
          <Icon
            name="user"
            color="#000"
            size={25}
            style={{ paddingRight: 10 }}
          />
          <TextInput style={{ height: 40, width: 330 }} placeholder="Name" />
        </View>
        <View
          style={[
            styles.inputContainer,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <Icon name="lock" size={25} style={{ paddingRight: 10 }} />
          <TextInput
            style={{ height: 40, width: 330 }}
            placeholder="Password"
          />
          <Icon name="eye" size={25} style={{ paddingRight: 10 }} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.subText}>CREATE ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
  },
  titleText: {
    fontWeight: 700,
    lineHeight: 29,
    fontSize: 25,
    textAlign: "left",
    paddingLeft: "10%",
    paddingTop: "25%",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)",
    padding: 10,
    width: 330,
    maxHeight: 54,
  },
  button: {
    backgroundColor: "black",
    width: 330,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  subButton: {
    width: 110,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23.41,
    textAlign: "center",
    paddingTop: "20%",
  },
});
