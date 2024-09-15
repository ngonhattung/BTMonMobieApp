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
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.textInput} placeholder="Email" />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassWord}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Icon name="eye" size={25} style={styles.icon} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.subText}>
            When you agree to terms and conditions
          </Text>
          <Text style={[styles.subText, { color: "#5D25FA" }]}>
            For got your password?
          </Text>
          <Text style={styles.subText}>Or login with</Text>
        </View>

        <View style={styles.footerButton}>
          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#25479B" }]}
          >
            <Icon
              name="facebook-f"
              size={25}
              color="#FFFFFF"
              style={styles.iconButton}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#0F8EE0" }]}
          >
            <Icon
              name="envelope"
              size={25}
              color="#000"
              style={styles.iconButton}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.subButton,
              {
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#0680F1",
              },
            ]}
          >
            <Icon
              name="google"
              size={25}
              color="red"
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
    backgroundColor: "#31AA5230",
    padding: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInput: {
    height: 54,
    paddingLeft: 10,
    width: "100%",
    backgroundColor: "#C4C4C44D",
    margin: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#C4C4C44D",
    margin: 8,
  },
  inputPassWord: {
    flex: 1,
    height: 54,
    paddingLeft: 10,
  },
  icon: {
    position: "absolute",
    right: 15,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  footerButton: {
    flexDirection: "row",
    marginTop: 50,
  },
  titleText: {
    fontWeight: 700,
    lineHeight: 29,
    fontSize: 25,
    textAlign: "center",
    paddingTop: "10%",
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E53935",
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  subButton: {
    width: 120,
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
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16.41,
    textAlign: "center",
    paddingTop: "8%",
  },
});
