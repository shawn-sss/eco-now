import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../(shared)/context/ThemeContext";

export const useStyles = () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.background,
    },
    centeredContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "italic",
      textAlign: "center",
      color: theme.colors.text,
    },
    text: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: "center",
      color: theme.colors.text,
    },
  });
};
