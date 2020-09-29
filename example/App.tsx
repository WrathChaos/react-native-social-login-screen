import React from "react";
import { StatusBar } from "react-native";
import SocialLoginScreen from "./lib/SocialLoginScreen";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent hidden />
      <SocialLoginScreen
        backArrowImageSource={require("./assets/left-arrow.png")}
        signUpTextStyle={{
          fontFamily: "Sansita-Regular",
        }}
        loginTextStyle={{
          fontFamily: "Athelas-Bold",
        }}
      />
    </>
  );
};

export default App;
