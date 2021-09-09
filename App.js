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
import firebase from "firebase";

import Dashboard from "./src/screens/Dashboard";
import BreathingFlowSignal from "./src/screens/BreathingFlowSignal";
import NasalPressure from "./src/screens/NasalPressure";

const firebaseConfig = {
  apiKey: "AIzaSyCgpYAc-1Z34f8EdmusW9YL9ERIMOBVZqQ",
  authDomain: "ventilatorapp-c14c3.firebaseapp.com",
  projectId: "ventilatorapp-c14c3",
  storageBucket: "ventilatorapp-c14c3.appspot.com",
  messagingSenderId: "102303671067",
  appId: "1:102303671067:web:68278442946e827fa3a9be",
  measurementId: "G-RM137MCC2B",
};

firebase.initializeApp(firebaseConfig);

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
