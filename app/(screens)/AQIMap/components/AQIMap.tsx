import React from "react";
import { Text, View } from "@/components/Themed";

import { useStyles } from "./AQIMap.styles";

import PermissionDenied from "../subcomponents/PermissionDenied";
import { useLocation } from '../hooks/useLocation';

const AQIMapComponent: React.FC = () => {
  const styles = useStyles();
  const { location, hasPermission } = useLocation();
  if (location != null) {
    console.log(location);
  }
  if (hasPermission === null) {
    return <View style={styles.container} />;
  } else if (hasPermission === false) {
    return <PermissionDenied />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Permission granted. See log for more info!</Text>
      </View>
    );
  }
};

export default AQIMapComponent;
