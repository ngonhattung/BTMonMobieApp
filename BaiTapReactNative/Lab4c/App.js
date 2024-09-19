import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpCase, setIsUpCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [passGen, setPassGen] = useState("");
  const [textLenPW, setTextLenPW] = useState("");

  const generatePass = () => {
    let pass = "";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "@#$";
    let str = "";

    if (isLowerCase) str += lower;
    if (isUpCase) str += upper;
    if (isNumber) str += numbers;
    if (isSpecial) str += symbols;

    console.log(str);
    if (str.length === 0) {
      return setPassGen("Chọn vào 1 trong các checkbox");
    }

    for (let i = 0; i < textLenPW; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    return setPassGen(pass);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            PASSWORD
            <br />
            GENETATOR
          </Text>
        </View>
        <View style={styles.inputGenerate}>
          <TextInput style={styles.textInput} value={passGen}></TextInput>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.textForm}>Password length</Text>
            <TextInput
              style={styles.textPwLen}
              onChangeText={(lenNew) => setTextLenPW(lenNew)}
              value={textLenPW}
              defaultValue={textLenPW}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textForm}>Include lower case letters</Text>
            <CheckBox
              value={isLowerCase}
              onValueChange={setIsLowerCase}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textForm}>Include upcase letters</Text>
            <CheckBox
              value={isUpCase}
              onValueChange={setIsUpCase}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textForm}>Include number</Text>
            <CheckBox
              value={isNumber}
              onValueChange={setIsNumber}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textForm}>Include special symbol</Text>
            <CheckBox
              value={isSpecial}
              onValueChange={setIsSpecial}
              style={styles.checkbox}
            />
          </View>
        </View>

        <View style={styles.footer}>
          {/* <Text style={[styles.text, { marginBottom: 5 }]}>
            {passGen ? `Your password: ${passGen}` : ""}
          </Text> */}
          <TouchableOpacity style={styles.button} onPress={generatePass}>
            <Text style={styles.text}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
  },
  subContainer: {
    backgroundColor: "#23235B",
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    marginTop: 20,
    color: "#FFFFFF",
  },
  inputGenerate: {
    width: "100%",
    backgroundColor: "#151537",
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 15,
  },
  textInput: {
    height: 55,
    fontSize: 20,
    color: "#FFFFFF",
  },
  formContainer: {
    justifyContent: "center",
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  textPwLen: {
    height: 33,
    backgroundColor: "#FFFFFF",
    width: 118,
  },
  textForm: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 700,
  },
  checkbox: {
    alignSelf: "center",
    width: 25,
    height: 25,
  },
  footer: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3B3B98",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
});
