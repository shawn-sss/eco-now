import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "./(shared)/context/ThemeContext";

export const useStyles = () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    subtitle: {
      fontSize: 16,
      fontStyle: "italic",
      color: theme.colors.text,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      backgroundColor: theme.colors.border,
    },
  });
};
