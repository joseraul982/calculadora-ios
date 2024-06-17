import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import CalculatorScreen from "./presentation/screens/CalculatorScreen";
import { styles } from "./config/theme/app-them";

const Index = () => {
  return (
    <SafeAreaView style={[styles.background]}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default Index;
