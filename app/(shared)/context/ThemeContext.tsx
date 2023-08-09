import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useColorScheme, StatusBar } from "react-native";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import Colors from "../../../constants/Colors";

type CustomThemeColors = NavigationTheme["colors"] & {
  switchOn: string;
  switchOff: string;
};

type CustomTheme = Omit<NavigationTheme, "colors"> & {
  colors: CustomThemeColors;
};

interface ThemeContextType {
  theme: CustomTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const CustomDarkTheme: CustomTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    switchOn: Colors.dark.tint,
    switchOff: Colors.light.tint,
  },
};

const CustomDefaultTheme: CustomTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    switchOn: Colors.light.tint,
    switchOff: Colors.dark.tint,
  },
};

const defaultContextData = {
  theme: CustomDefaultTheme,
  toggleTheme: () => {},
  isDark: false,
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextData);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [preferredTheme, setPreferredTheme] = useState<CustomTheme | null>(
    null,
  );
  const [isDark, setIsDark] = useState<boolean>(systemColorScheme === "dark");
  const theme =
    preferredTheme ?? (isDark ? CustomDarkTheme : CustomDefaultTheme);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      setPreferredTheme(newIsDark ? CustomDarkTheme : CustomDefaultTheme);
      return newIsDark;
    });
  };

  useEffect(() => {
    const barStyle = isDark ? "light-content" : "dark-content";
    StatusBar.setBarStyle(barStyle, true);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
