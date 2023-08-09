import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../(shared)/context/ThemeContext";
import { RFPercentage } from "react-native-responsive-fontsize";

export const useStyles = () => {
    const { theme } = useContext(ThemeContext);
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: theme.colors.background
        },
        text: {
            textAlign: 'center',
            fontSize: RFPercentage(3),
            color: theme.colors.text,
        },
    });
};
