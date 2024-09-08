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
import Icon from "react-native-vector-icons/FontAwesome5";
import Rectangle from "../Lab3b/assets/images/Rectangle.png";
import Lock from "../Lab3b/assets/images/Lock.png";
const App = () => {
  return (
    <ImageBackground source={Rectangle} style={styles.background}>
      <View style={styles.container}>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image source={Lock} style={{ width: 105, height: 117 }} />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.titleText}>FORGET </Text>
          <Text style={styles.titleText}>PASSWORD</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.subText}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={25} color="#000" style={styles.icon} />
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
    padding: 10,
    width: 305,
    maxHeight: 45,
  },
  subText: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17.58,
    textAlign: "center",
    width: 305,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
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
  button: {
    backgroundColor: "#E3C000",
    width: 305,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
