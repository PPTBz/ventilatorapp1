import React from "react";
import { View, Text } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";

const BreathingFlowSignal = () => {
  return (
    <ViewContainer backgroundColor={Colors.powderBlue}>
      <Text style={styles.text}>Breathing Flow Signal</Text>
    </ViewContainer>
  );
};

export default BreathingFlowSignal;
