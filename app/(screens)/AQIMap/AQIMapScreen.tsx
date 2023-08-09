import { View } from "@/components/Themed";
import AQIMapComponent from "./components/AQIMap";

export default function AQIMapScreen() {
  return (
    <View style={{ flex: 1 }}>
      <AQIMapComponent />
    </View>
  );
}
