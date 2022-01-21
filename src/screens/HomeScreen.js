import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ViewContainer from "../components/ViewContainer";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ViewContainer>
        <Text
          style={{
            padding: 20,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#009394",
          }}
        >
          AppName
        </Text>
        <TouchableOpacity
          style={{
            padding: 16,
            margin: 10,
            backgroundColor: "#009394",
            width: 280,
            height: 50,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("CreateAcc")}
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
        <TouchableOpacity
          style={{
            padding: 16,
            margin: 10,
            backgroundColor: "#009394",
            width: 280,
            height: 50,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </ViewContainer>
    </>
  );
};

export default HomeScreen;
