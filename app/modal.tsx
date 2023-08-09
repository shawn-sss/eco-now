import React, { useContext } from "react";
import { Text, View } from "../components/Themed";
import { StatusBar } from "expo-status-bar";

import { useStyles } from "./modal.styles";
import { ThemeContext } from "./(shared)/context/ThemeContext";

export default function ModalScreen() {
  const { isDark } = useContext(ThemeContext);
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <View style={styles.separator} />
      <Text style={styles.subtitle}>2023 © ECO NOW</Text>
      <Text style={styles.subtitle}>COMPUTER WARS . COM</Text>
      <Text style={styles.subtitle}>ALL RIGHTS RESERVED</Text>
      <StatusBar style={isDark ? "light" : "dark"} />
    </View>
  );
}
