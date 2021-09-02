import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";

const Dashboard = ({ navigation }) => {
  return (
    <ViewContainer>
      <TouchableOpacity
        style={{
          padding: 16,
          margin: 10,
          backgroundColor: Colors.steelBlue,
        }}
        onPress={() => navigation.navigate("BreathingFlowSignal")}
      >
        <Text>Breathing Flow Signal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 16,
          margin: 10,
          backgroundColor: Colors.steelBlue,
        }}
        onPress={() => navigation.navigate("NasalPressure")}
      >
        <Text>Nasal Pressure</Text>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default Dashboard;
