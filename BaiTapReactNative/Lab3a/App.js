import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Rectangle from "../Lab3a/assets/images/Rectangle.png";
import Eclipse from "../Lab3a/assets/images/Ellipse.png";
export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <ImageBackground
        source={Rectangle}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Image source={Eclipse} style={{ width: 140, height: 140 }} />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={styles.titleText}>GROW </Text>
        <Text style={styles.titleText}>YOUR BUSINESS</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={styles.subText}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>SIGN UP </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={styles.subText}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    fontFamily: "Roboto",
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29.3,
  },
  subText: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17.58,
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E3C000",
    width: 119,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
