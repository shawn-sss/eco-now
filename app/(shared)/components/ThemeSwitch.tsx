import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);
  const thumbColor = isDark ? theme.colors.switchOn : theme.colors.switchOff;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTheme}>
        <FontAwesome
          name={isDark ? "moon-o" : "sun-o"}
          size={24}
          color={isDark ? thumbColor : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ThemeSwitch;
