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
import Eye from "../Lab3XMEye/assets/images/Group (1).png";
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
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image source={Eye}></Image>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
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
            color="blue"
            size={25}
            style={{ paddingRight: 10 }}
          />
          <TextInput
            style={{ height: 40, width: 330 }}
            placeholder="Please input user name"
          />
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
          <Icon
            name="lock"
            color="blue"
            size={25}
            style={{ paddingRight: 10 }}
          />
          <TextInput
            style={{ height: 40, width: 330 }}
            placeholder="Please input password"
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={styles.subText}>Register</Text>
          <Text style={styles.subText}>Forgot Password</Text>
        </View>
        <View>
          <Text style={[styles.subText]}>Other Login Methods</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: "7%",
          }}
        >
          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#3AB4FF" }]}
          >
            <Icon
              name="user-plus"
              size={45}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#F4AA47" }]}
          >
            <Icon name="wifi" size={45} color="#FFFFFF" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.subButton,
              {
                backgroundColor: "#3A579C",
              },
            ]}
          >
            <Icon
              name="facebook-f"
              size={45}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: "#C4C4C4",
    padding: 10,
    width: 330,
    maxHeight: 54,
  },
  button: {
    backgroundColor: "#386FFC",
    width: 330,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  subButton: {
    width: 74,
    height: 74,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21.41,
    textAlign: "center",
    paddingTop: "10%",
  },
});
