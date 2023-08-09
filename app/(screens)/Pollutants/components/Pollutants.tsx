import { ScrollView } from "react-native";
import { Text, View } from "../../../../components/Themed";

import { useStyles } from "./Pollutants.styles";

import ThemeSwitch from "../../../(shared)/components/ThemeSwitch";
import { PollutantInfo } from "../utils/PollutantInfo";

export default function PollutantsComponent() {
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centeredContainer}>
        <ThemeSwitch />
        <Text style={styles.subtitle}>O3 - Ozone</Text>
        <Text style={styles.text}>{PollutantInfo.o3}</Text>
        <View style={{ height: 20 }} />
        <Text style={styles.subtitle}>PM2.5 - Fine Particulate Matter</Text>
        <Text style={styles.text}>{PollutantInfo.pm25}</Text>
        <View style={{ height: 20 }} />
        <Text style={styles.subtitle}>PM5 - Coarse Particulate Matter</Text>
        <Text style={styles.text}>{PollutantInfo.pm5}</Text>
        <View style={{ height: 20 }} />
        <Text style={styles.subtitle}>PM10 - Coarse Particulate Matter</Text>
        <Text style={styles.text}>{PollutantInfo.pm10}</Text>
        <View style={{ height: 40 }} />
      </View>
    </ScrollView>
  );
}
