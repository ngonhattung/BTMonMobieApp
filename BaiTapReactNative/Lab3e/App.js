import { StatusBar } from "expo-status-bar";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState, useMemo } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import RadioGroup from "react-native-radio-buttons-group";

const { width } = Dimensions.get("window");

export default function App() {
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
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
      <View style={styles.header}>
        <Text style={styles.titleText}>REGISTER</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Phone" />
        <TextInput style={styles.textInput} placeholder="Email" />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Fontisto style={styles.icon} name="eye" size={24} color="black" />
        </View>

        <TextInput style={styles.textInput} placeholder="Birthday" />

        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          layout="row"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>
          When you agree to terms and conditions
        </Text>
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
    marginBottom: 30,
  },
  titleText: {
    fontWeight: "700",
    lineHeight: 29,
    fontSize: width * 0.065,
    padding: 8,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 54,
    width: "100%",
    margin: 8,
    paddingLeft: 15,
    backgroundColor: "#C4C4C44D",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 8,
    backgroundColor: "#C4C4C44D",
  },
  passwordInput: {
    flex: 1,
    height: 54,
    paddingLeft: 15,
  },
  icon: {
    position: "absolute",
    right: 15,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#E53935",
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: width * 0.04,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
  subText: {
    fontSize: width * 0.035,
    fontWeight: "400",
    lineHeight: 16.41,
    textAlign: "center",
  },
});
