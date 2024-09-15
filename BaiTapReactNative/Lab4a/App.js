import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function App() {
  const [mess, setMess] = useState("");
  const [textUserName, setTextUserName] = useState("");
  const [textPW, setTextPW] = useState("");
  const [stateIconEyePW, setStateIconEyePW] = useState(true);
  const checkUser = () => {
    if (textUserName == "nhattung" && textPW == "123456") {
      setMess("Đăng nhập thành công");
    } else {
      setMess("Đăng nhập thật bại");
    }
    setTextUserName("");
    setTextPW("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="user" color="#000" size={25} style={styles.iconLeft} />
          <TextInput
            style={styles.inpupText}
            placeholder="Name"
            onChangeText={(newText) => setTextUserName(newText)}
            value={textUserName}
            defaultValue={textUserName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={25} style={styles.iconLeft} />
          <TextInput
            style={styles.inpupText}
            placeholder="Password"
            secureTextEntry={stateIconEyePW}
            onChangeText={(newText) => setTextPW(newText)}
            value={textPW}
          />
          <Icon
            name="eye"
            size={25}
            style={styles.iconRight}
            onPress={() => {
              stateIconEyePW === true
                ? setStateIconEyePW(false)
                : setStateIconEyePW(true);
            }}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={checkUser}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.subText}>CREATE ACCOUNT</Text>
        <Text style={[styles.subText, { color: "red" }]}>{mess}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
    padding: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    margin: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  inpupText: {
    flex: 1,
    height: 54,
    paddingLeft: 50,
  },
  iconLeft: {
    position: "absolute",
    left: 15,
  },
  iconRight: {
    position: "absolute",
    right: 15,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: 700,
    lineHeight: 29,
    fontSize: 25,
    marginTop: 50,
  },
  button: {
    backgroundColor: "black",
    width: "100%",
    height: 54,
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
    marginTop: 40,
  },
});
