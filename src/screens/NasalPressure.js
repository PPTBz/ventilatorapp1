import React from "react";
import { View, Text } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";

const NasalPressure = () => {
  return (
    <ViewContainer backgroundColor={Colors.powderBlue}>
      <Text style={styles.text}>Nasal Pressure</Text>
    </ViewContainer>
  );
};

export default NasalPressure;
