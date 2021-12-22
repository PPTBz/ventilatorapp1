// @refresh reset
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
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

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { QuerySnapshot } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5I_3OQTgJxD7vvTXOJB-hSq-2XYLg7Fc",
  authDomain: "ventilatorapp-5323b.firebaseapp.com",
  projectId: "ventilatorapp-5323b",
  storageBucket: "ventilatorapp-5323b.appspot.com",
  messagingSenderId: "193358965836",
  appId: "1:193358965836:web:46b433794addc690d818e9",
  measurementId: "G-ZVSBE0CC53",
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

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

// db.collection("ventilatordata")
// .where("capital", "==", true)
// .get()
//.then((querySnapshot) => {
//querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
// console.log(doc.id, " => ", doc.data());
// });
// })
//.catch((error) => {
// console.log("Error getting documents: ", error);
// });

export default App;
