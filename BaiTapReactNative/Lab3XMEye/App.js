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
import Icon from "react-native-vector-icons/FontAwesome5";
import Eye from "../Lab3XMEye/assets/images/Group (1).png";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Eye}></Image>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="user" color="blue" size={25} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Please input user name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" color="blue" size={25} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Please input password"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
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
              style={styles.iconButton}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#F4AA47" }]}
          >
            <Icon
              name="wifi"
              size={45}
              color="#FFFFFF"
              style={styles.iconButton}
            />
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
              style={styles.iconButton}
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
    padding: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: "#C4C4C4",
    padding: 8,
  },
  textInput: {
    flex: 1,
    paddingLeft: 40,
    height: 54,
  },
  icon: {
    position: "absolute",
    left: 15,
  },
  buttonContainer: {
    justifyContent: "center",
    marginTop: 50,
  },
  titleText: {
    fontWeight: 700,
    lineHeight: 29,
    fontSize: 25,
    textAlign: "left",
    paddingLeft: "10%",
    paddingTop: "25%",
  },
  button: {
    backgroundColor: "#386FFC",
    width: "100%",
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
  iconButton: {
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
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21.41,
    textAlign: "center",
    paddingTop: "10%",
  },
});
