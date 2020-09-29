import * as React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,, TextStyle
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SocialLoginScreen.style";
import TextField from "./components/TextField/TextField";
import SocialButton from "./components/SocialButton/SocialButton";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

interface IProps {
  signUpText?: string;
  signUpTextStyle?: TextStyle;
  backArrowImageSource: any;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
}

interface IState {}

export default class SocialLoginScreen extends React.PureComponent<
  IProps,
  IState
> {
  renderHeader = () => {
    const { signUpText= "SIGN UP", signUpTextStyle, backArrowImageSource, onSignUpPress } = this.props;
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerContainerGlue}
          onPress={onSignUpPress}
        >
          <Image
            source={backArrowImageSource}
            style={styles.headerBackImageStyle}
          />
          <Text style={[styles.signUpTextStyle, signUpTextStyle]}>{signUpText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderLoginTitle = () => {
    return (
      <View
        style={{
          marginLeft: 32,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "Athelas-Bold",
          }}
        >
          Log In
        </Text>
      </View>
    );
  };

  renderTextFieldContainer = () => {
    return (
      <View style={{ marginTop: 48 }}>
        <TextField placeholder="toy_brise@jaunita.us" />
        <View
          style={{
            marginTop: 24,
          }}
        >
          <TextField
            width="70%"
            secureTextEntry
            placeholder="• • • • • • • •"
          />
        </View>
        {this.renderForgotPassword()}
      </View>
    );
  };

  renderForgotPassword = () => {
    const { onForgotPasswordPress } = this.props;
    return (
      <TouchableOpacity
        style={{
          marginTop: 24,
          marginLeft: 32,
        }}
        onPress={onForgotPasswordPress}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#b1b2ba",
            fontFamily: "Sansita-Bold",
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    );
  };

  renderClassicLoginButton = () => {
    return (
      <SocialButton
        text="Let's cook!"
        shadowColor="#58a13f"
        onPress={() => {}}
      />
    );
  };

  renderFacebookLoginButton = () => {
    return (
      <View style={{ marginTop: 12 }}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#4267B2"
          shadowColor="#2f4a82"
          component={
            <Image
              source={require("../assets/facebook-logo.png")}
              style={{ height: 25, width: 25 }}
            />
          }
          onPress={() => {}}
        />
      </View>
    );
  };

  renderTwitterLoginButton = () => {
    return (
      <View style={{ marginTop: 12 }}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#1DA1F2"
          shadowColor="#1a7aab"
          component={
            <Image
              source={require("../assets/twitter-logo.png")}
              style={{ height: 25, width: 25, left: 3 }}
            />
          }
          onPress={() => {}}
        />
      </View>
    );
  };

  renderGoogleLoginButton = () => {
    return (
      <View style={{ marginTop: 12 }}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#fff"
          component={
            <Image
              source={require("../assets/google-logo.png")}
              style={{ height: 25, width: 25, left: 3 }}
            />
          }
          onPress={() => {}}
        />
      </View>
    );
  };

  renderDiscordLoginButton = () => {
    return (
      <View style={{ marginTop: 12 }}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#7289DA"
          shadowColor="#4e5e96"
          component={
            <Image
              source={require("../assets/discord-logo.png")}
              style={{ height: 30, width: 30, left: 3 }}
            />
          }
          onPress={() => {}}
        />
      </View>
    );
  };

  renderSocialButtons = () => {
    return (
      <View style={{ marginTop: 32 }}>
        {this.renderClassicLoginButton()}
        <ScrollView contentInset={{ bottom: 100 }}>
          {this.renderFacebookLoginButton()}
          {this.renderTwitterLoginButton()}
          {this.renderGoogleLoginButton()}
          {this.renderDiscordLoginButton()}
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.renderHeader()}
        <View style={{ position: "absolute", right: -24, top: -32 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/ramen.png")}
            style={{ height: ScreenWidth * 0.55, width: ScreenWidth * 0.55 }}
          />
        </View>
        <View style={{ marginTop: ScreenHeight * 0.1 }}>
          {this.renderLoginTitle()}
          {this.renderTextFieldContainer()}
          {this.renderSocialButtons()}
        </View>
        <View style={{ position: "absolute", bottom: -32, left: -32 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/chef.png")}
            style={{ height: ScreenWidth * 0.7, width: ScreenWidth * 0.7 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
