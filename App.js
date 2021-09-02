import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Dashboard from "./src/screens/Dashboard";
import BreathingFlowSignal from "./src/screens/BreathingFlowSignal";
import NasalPressure from "./src/screens/NasalPressure";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="BreathingFlowSignal"
        component={BreathingFlowSignal}
      />
      <Stack.Screen name="NasalPressure" component={NasalPressure} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
