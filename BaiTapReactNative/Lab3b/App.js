import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Lock from "../Lab3b/assets/images/Lock.png";
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Lock} style={styles.img} />
        <Text style={styles.titleText}>FORGET </Text>
        <Text style={styles.titleText}>PASSWORD</Text>
      </View>

      <View style={styles.textCenter}>
        <Text style={styles.subText}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.emailContainer}>
          <Fontisto style={styles.icon} name="email" size={24} color="black" />
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D0F3F6",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  img: {
    width: 105,
    height: 117,
    marginBottom: 30,
  },
  textCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#C4C4C4",
    margin: 20,
  },
  textInput: {
    flex: 1,
    height: 54,
    paddingLeft: 50,
  },
  icon: {
    position: "absolute",
    left: 15,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E3C000",
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17.58,
    textAlign: "center",
    width: 305,
  },

  titleText: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29.3,
    color: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
  },
});

export default App;
