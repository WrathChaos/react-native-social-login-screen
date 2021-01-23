import React, { useState } from "react";
import { StatusBar } from "react-native";
// import SocialLoginScreen from "react-native-social-login-screen";
import SocialLoginScreen from "./lib/SocialLoginScreen";

const App = () => {
  const [isSpinner, setIsSpinner] = useState(false);
  const [isDiscordSpinner, setIsDiscordSpinner] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" translucent hidden />
      <SocialLoginScreen
        onUserNameChangeText={(username) => console.log("Username: ", username)}
        onPasswordChangeText={(password) => console.log("Password: ", password)}
        onSignUpPress={() => {}}
        onLoginPress={() => {}}
        onForgotPasswordPress={() => {}}
        rightTopAssetImageSource={require("./assets/ramen.png")}
        leftBottomAssetImageSource={require("./assets/chef.png")}
        enableFacebookLogin
        onFacebookLoginPress={() => {
          setIsSpinner(true);
          setTimeout(() => {
            setIsSpinner(false);
          }, 2000);
        }}
        facebookSpinnerVisibility={isSpinner}
        discordSpinnerVisibility={isDiscordSpinner}
        enableDiscordLogin
        onDiscordLoginPress={() => {
          setIsDiscordSpinner(true);
          setTimeout(() => {
            setIsDiscordSpinner(false);
          }, 2000);
        }}
        // enableTwitterLogin
        // onTwitterLoginPress={() => {}}
        // enableGoogleLogin
        // onGoogleLoginPress={() => {}}
        loginButtonTextStyle={{
          fontFamily: "Sansita-Bold",
        }}
        signUpTextStyle={{
          fontFamily: "Sansita-Regular",
        }}
        loginTextStyle={{
          fontFamily: "Athelas-Bold",
        }}
        forgotPasswordTextStyle={{
          fontFamily: "Sansita-Bold",
        }}
      />
    </>
  );
};

export default App;
