import React from "react";
import { Animated } from "react-native";
import { View, Text } from "@/components/Themed";

import { useStyles } from "./Home.styles";
import LogoSVG from "../../../(assets)/logo.svg";

import ThemeSwitch from "@/app/(shared)/components/ThemeSwitch";
import useHomeState from "../hooks/useHomeState";

const HomeComponent: React.FC = () => {
  const styles = useStyles();
  const { text, opacity } = useHomeState();
  return (
    <View style={styles.container}>
      <LogoSVG style={styles.logo} />
      <Text style={styles.title}>Eco Now</Text>
      <Text style={styles.subtitle}>
        Data sourced from EPA-approved reporting sites.
      </Text>
      <View style={styles.separator} />
      <View style={{ maxWidth: "80%", backgroundColor: "transparent" }}>
        <Animated.Text style={[styles.text, { opacity }]}>{text}</Animated.Text>
      </View>
      <View style={{ height: 20 }} />
      <ThemeSwitch />
    </View>
  );
};

export default HomeComponent;
