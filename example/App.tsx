import React from "react";
import { StatusBar } from "react-native";
import SocialLoginScreen from "react-native-social-login-screen";

const App = () => {
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
        onFacebookLoginPress={() => {}}
        enableDiscordLogin
        onDiscordLoginPress={() => {}}
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
