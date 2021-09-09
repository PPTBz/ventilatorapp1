import React from "react";
import { View, Text } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";
import { LineChart } from "react-native-chart-kit";

const NasalPressure = () => {
  return (
    <ViewContainer backgroundColor={Colors.powderBlue}>
      <Text style={styles.text}>Nasal Pressure</Text>
      <View style={{ height: "500px", width: "500px" }}>
        <LineChart
          data={{
            labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
            datasets: [
              {
                label: "Nasal Pressure (cmH2o)",
                data: [32, 45, 12, 76, 69],
                color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 4,
              },
            ],
          }}
        />
      </View>
    </ViewContainer>
  );
};

export default NasalPressure;
