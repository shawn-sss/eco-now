import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { motivationalTexts } from "../utils/motivationalTexts";

const useHomeState = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setCurrentTextIndex((currentTextIndex + 1) % motivationalTexts.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 15000);
    return () => clearInterval(interval);
  }, [currentTextIndex]);
  return { text: motivationalTexts[currentTextIndex], opacity: fadeAnim };
};

export default useHomeState;
