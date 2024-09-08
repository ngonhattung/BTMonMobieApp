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
import Rectangle from "../Lab3c/assets/images/Rectangle.png";
import OTPTextView from "react-native-otp-textinput";
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
          <Text style={[styles.titleText, { fontSize: 60, lineHeight: 70 }]}>
            CODE
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.titleText, { fontSize: 20, lineHeight: 23 }]}>
            VERIFICATION
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.subText}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <OTPTextView
              inputCount={6}
              textInputStyle={{ borderBlockColor: "black", borderWidth: 1 }}
              tintColor={"black"}
              offTintColor={"black"}
            />
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
            <Text style={styles.text}>VERIFY CODE</Text>
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
    fontWeight: 700,
    color: "black",
    textAlign: "center",
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
    width: 340,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
