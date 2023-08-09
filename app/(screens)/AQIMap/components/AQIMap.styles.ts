import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../(shared)/context/ThemeContext";

export const useStyles = () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    text: {
      textAlign: 'center',
      color: theme.colors.text,
  },
  });
};
