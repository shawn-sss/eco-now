import { View } from '@/components/Themed';
import PollutantsComponent from "./components/Pollutants";

export default function PollutantsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <PollutantsComponent></PollutantsComponent>
    </View>
  );
}
