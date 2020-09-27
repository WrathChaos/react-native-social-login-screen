import React from "react";
import { StatusBar } from "react-native";
import SocialLoginScreen from "./lib/SocialLoginScreen";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SocialLoginScreen />
    </>
  );
};

export default App;
