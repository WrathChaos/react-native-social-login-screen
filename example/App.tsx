import React from "react";
import { StatusBar } from "react-native";
import SocialLoginScreen from "./lib/SocialLoginScreen";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent hidden />
      <SocialLoginScreen
        enableFacebookLogin
        onFacebookLoginPress={() => {}}
        enableDiscordLogin
        onDiscordLoginPress={() => {}}
        enableTwitterLogin
        onTwitterLoginPress={() => {}}
        enableGoogleLogin
        onGoogleLoginPress={() => {}}
        signUpTextStyle={{
          fontFamily: "Sansita-Regular",
        }}
        loginTextStyle={{
          fontFamily: "Athelas-Bold",
        }}
        forgotPasswordTextStyle={{
          fontFamily: "Sansita-Bold",
        }}
        onSignUpPress={() => {}}
        onLoginPress={() => {}}
        onForgotPasswordPress={() => {}}
        rightTopAssetImageSource={require("./assets/ramen.png")}
        leftBottomAssetImageSource={require("./assets/chef.png")}
      />
    </>
  );
};

export default App;
