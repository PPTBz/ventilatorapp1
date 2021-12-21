import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5I_3OQTgJxD7vvTXOJB-hSq-2XYLg7Fc",
  authDomain: "ventilatorapp-5323b.firebaseapp.com",
  projectId: "ventilatorapp-5323b",
  storageBucket: "ventilatorapp-5323b.appspot.com",
  messagingSenderId: "193358965836",
  appId: "1:193358965836:web:46b433794addc690d818e9",
  measurementId: "G-ZVSBE0CC53",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
