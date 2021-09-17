import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";

const Dashboard = ({ navigation }) => {
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
          The Dashboard
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
          onPress={() => navigation.navigate("BreathingFlowSignal")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Breathing Flow Signal
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
          onPress={() => navigation.navigate("NasalPressure")}
        >
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Nasal Pressure
          </Text>
        </TouchableOpacity>
      </ViewContainer>
    </>
  );
};

export default Dashboard;
