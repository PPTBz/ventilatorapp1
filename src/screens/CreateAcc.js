import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";

const CreateAcc = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("Email");
  const [username, onChangeUsername] = React.useState("Username");
  const [password, onChangePassword] = React.useState("Password");
  const [confirmPassword, onChangeConfirmPassword] =
    React.useState("Confirm Password");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity
        style={{
          padding: 16,
          margin: 10,
          backgroundColor: "#009394",
          width: 280,
          height: 50,
          borderRadius: 50,
        }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateAcc;
