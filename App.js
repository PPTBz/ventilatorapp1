/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard Screen</Text>
      <Button
        title="Breathing Flow Signal"
        onPress={() => navigation.navigate("Breathing Flow Signal")}
      />
      <Button
        title="Nasal Pressure"
        onPress={() => navigation.navigate("Nasal Pressure")}
      />
    </View>
  );
};

const BreathingFlowSignalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Breathing Flow Signal Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const NasalPressureScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nasal Pressure Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009387",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
          }}
        />
        <Stack.Screen
          name="Breathing Flow Signal"
          component={BreathingFlowSignalScreen}
        />
        <Stack.Screen name="Nasal Pressure" component={NasalPressureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
