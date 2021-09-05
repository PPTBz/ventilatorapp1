import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";
import { Line } from "react-chartjs-2";

const BreathingFlowSignal = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "Breathing Flow Signal (L•s^-1)",
          data: [32, 45, 12, 76, 69],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <ViewContainer backgroundColor={Colors.powderBlue}>
      <Text style={styles.text}>Breathing Flow Signal</Text>
      <View style={{ height: "500px", width: "500px" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
          }}
        />
      </View>
    </ViewContainer>
  );
};

export default BreathingFlowSignal;
