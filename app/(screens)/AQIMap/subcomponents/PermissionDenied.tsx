import { View, Text } from "@/components/Themed";
import { useStyles } from "./PermissionDenied.styles";

export default function PermissionDenied() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Permission Denied</Text>
      <Text style={styles.text}>:(</Text>
    </View>
  );
}
