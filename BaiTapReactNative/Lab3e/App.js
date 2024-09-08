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
import { useState, useMemo } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import RadioGroup from "react-native-radio-buttons-group";
export default function App() {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
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
      <View>
        <Text style={styles.titleText}>REGISTER</Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <TextInput
          style={[styles.inputContainer, { marginBottom: "4%" }]}
          placeholder="Name"
        />
        <TextInput
          style={[styles.inputContainer, { marginBottom: "4%" }]}
          placeholder="Phone"
        />
        <TextInput
          style={[styles.inputContainer, { marginBottom: "4%" }]}
          placeholder="Email"
        />
        <View
          style={[
            styles.inputContainer,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "5%",
            },
          ]}
        >
          <TextInput
            style={{ height: 40, width: 330 }}
            placeholder="Password"
          />
          <Icon name="eye" size={25} style={styles.icon} />
        </View>
        <TextInput
          style={[styles.inputContainer, { marginBottom: "4%" }]}
          placeholder="Birthday"
        />
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          layout="row"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>REGISTER</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.subText}>
            When you agree to terms and conditions
          </Text>
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
