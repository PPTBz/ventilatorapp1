import React from "react";
import { View, Text } from "react-native";
import Colors from "../theme/Colors";
import ViewContainer, { styles } from "../components/ViewContainer";
import { LineChart, YAxis, XAxis, Grid } from "react-native-svg-charts";

class BreathingFlowSignal extends React.PureComponent {
  render() {
    const data = [
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
    ];

    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    return (
      <>
        <Text
          style={{
            padding: 20,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#009394",
          }}
        >
          Breathing Flow Signal
        </Text>
        <View style={{ height: 200, padding: 30, flexDirection: "row" }}>
          <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ flex: 1 }}
              data={data}
              contentInset={verticalContentInset}
              svg={{ stroke: "#009394" }}
            >
              <Grid />
            </LineChart>
            <XAxis
              style={{ marginHorizontal: -10, height: xAxisHeight }}
              data={data}
              formatLabel={(value, index) => index}
              contentInset={{ left: 10, right: 10 }}
              svg={axesSvg}
            />
          </View>
        </View>
      </>
    );
  }
}

export default BreathingFlowSignal;
