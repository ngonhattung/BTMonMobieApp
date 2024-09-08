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
      <View>
        <Text style={styles.titleText}>LOGIN</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TextInput style={[styles.inputContainer]} placeholder="Email" />
        <View
          style={[
            styles.inputContainer,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "8%",
            },
          ]}
        >
          <TextInput
            style={{ height: 40, width: 330 }}
            placeholder="Password"
          />
          <Icon name="eye" size={25} style={styles.icon} />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "15%",
          }}
        >
          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#25479B" }]}
          >
            <Icon
              name="facebook-f"
              size={25}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.subButton, { backgroundColor: "#0F8EE0" }]}
          >
            <Icon name="envelope" size={25} color="#000" style={styles.icon} />
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
            <Icon name="google" size={25} color="red" style={styles.icon} />
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
  },
  titleText: {
    fontWeight: 700,
    lineHeight: 29,
    fontSize: 25,
    textAlign: "center",
    paddingTop: "10%",
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
    backgroundColor: "#E53935",
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
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16.41,
    textAlign: "center",
    paddingTop: "8%",
  },
});
