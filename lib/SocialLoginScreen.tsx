import * as React from "react";
import {
  Text,
  View,
  Image,
  TextStyle,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SocialLoginScreen.style";
import TextField from "./components/TextField/TextField";
import SocialButton from "./components/SocialButton/SocialButton";

// ? Assets
const backArrowImage = require("./local-assets/left-arrow.png");
const facebookLogo = require("./local-assets/facebook-logo.png");
const twitterLogo = require("./local-assets/twitter-logo.png");
const googleLogo = require("./local-assets/google-logo.png");
const discordLogo = require("./local-assets/discord-logo.png");

export interface ISocialLoginProps {
  loginText?: string;
  signUpText?: string;
  loginTitleText?: string;
  forgotPasswordText?: string;
  loginButtonShadowColor?: string;
  loginButtonBackgroundColor?: string;
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
  enableFacebookLogin?: boolean;
  enableTwitterLogin?: boolean;
  enableGoogleLogin?: boolean;
  enableDiscordLogin?: boolean;
  loginTextStyle?: TextStyle;
  signUpTextStyle?: TextStyle;
  forgotPasswordTextStyle?: TextStyle;
  backArrowImageSource?: any;
  loginButtonTextStyle?: any;
  usernameTextFieldStyle?: any;
  passwordTextFieldStyle?: any;
  rightTopAssetImageSource?: any;
  leftBottomAssetImageSource?: any;
  onLoginPress: () => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
  onFacebookLoginPress?: () => void;
  onTwitterLoginPress?: () => void;
  onGoogleLoginPress?: () => void;
  onDiscordLoginPress?: () => void;
  onUserNameChangeText: (text: string) => void;
  onPasswordChangeText: (text: string) => void;
}

interface IState {}

export default class SocialLoginScreen extends React.PureComponent<
  ISocialLoginProps,
  IState
> {
  renderHeader = () => {
    const {
      signUpText = "SIGN UP",
      signUpTextStyle,
      backArrowImageSource = backArrowImage,
      onSignUpPress,
    } = this.props;
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
          <Text style={[styles.signUpTextStyle, signUpTextStyle]}>
            {signUpText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderLoginTitle = () => {
    const { loginTitleText = "Log In", loginTextStyle } = this.props;
    return (
      <View style={styles.loginTitleContainer}>
        <Text style={[styles.loginTextStyle, loginTextStyle]}>
          {loginTitleText}
        </Text>
      </View>
    );
  };

  renderTextFieldContainer = () => {
    const {
      usernameTextFieldStyle,
      usernamePlaceholder = "john_doe@example.com",
      onUserNameChangeText,
      passwordPlaceholder = "• • • • • • • •",
      onPasswordChangeText,
      passwordTextFieldStyle,
    } = this.props;
    return (
      <View style={styles.textFieldContainer}>
        <TextField
          {...this.props}
          placeholder={usernamePlaceholder}
          textFieldStyle={usernameTextFieldStyle}
          onChangeText={onUserNameChangeText}
        />
        <View style={styles.passwordTextFieldContainer}>
          <TextField
            width="70%"
            secureTextEntry
            {...this.props}
            placeholder={passwordPlaceholder}
            textFieldStyle={passwordTextFieldStyle}
            onChangeText={onPasswordChangeText}
          />
        </View>
        {this.renderForgotPassword()}
      </View>
    );
  };

  renderForgotPassword = () => {
    const {
      forgotPasswordText = "Forgot Password?",
      forgotPasswordTextStyle,
      onForgotPasswordPress,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={onForgotPasswordPress}
      >
        <Text style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}>
          {forgotPasswordText}
        </Text>
      </TouchableOpacity>
    );
  };

  renderClassicLoginButton = () => {
    const {
      loginText = "Let's cook!",
      loginButtonBackgroundColor,
      loginButtonShadowColor = "#58a13f",
      onLoginPress,
    } = this.props;
    return (
      <SocialButton
        {...this.props}
        text={loginText}
        onPress={onLoginPress}
        shadowColor={loginButtonShadowColor}
        backgroundColor={loginButtonBackgroundColor}
      />
    );
  };

  renderFacebookLoginButton = () => {
    const { onFacebookLoginPress } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          shadowColor="#2f4a82"
          backgroundColor="#4267B2"
          component={
            <Image source={facebookLogo} style={styles.facebookImageStyle} />
          }
          onPress={() => onFacebookLoginPress && onFacebookLoginPress()}
        />
      </View>
    );
  };

  renderTwitterLoginButton = () => {
    const { onTwitterLoginPress } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#1DA1F2"
          shadowColor="#1a7aab"
          component={
            <Image
              source={twitterLogo}
              style={styles.socialLoginButtonImageStyle}
            />
          }
          onPress={() => onTwitterLoginPress && onTwitterLoginPress()}
        />
      </View>
    );
  };

  renderGoogleLoginButton = () => {
    const { onGoogleLoginPress } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#fff"
          component={
            <Image
              source={googleLogo}
              style={styles.socialLoginButtonImageStyle}
            />
          }
          onPress={() => onGoogleLoginPress && onGoogleLoginPress()}
        />
      </View>
    );
  };

  renderDiscordLoginButton = () => {
    const { onDiscordLoginPress } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#7289DA"
          shadowColor="#4e5e96"
          component={
            <Image
              source={discordLogo}
              style={styles.socialLoginButtonImageStyle}
            />
          }
          onPress={() => onDiscordLoginPress && onDiscordLoginPress()}
        />
      </View>
    );
  };

  renderSocialButtons = () => {
    const {
      enableFacebookLogin,
      enableTwitterLogin,
      enableGoogleLogin,
      enableDiscordLogin,
    } = this.props;
    return (
      <View style={styles.socialButtonsContainer}>
        {this.renderClassicLoginButton()}
        <ScrollView
          style={styles.socialButtonsContainerGlue}
          contentInset={styles.socialLoginButtonsContentInset}
        >
          {enableFacebookLogin && this.renderFacebookLoginButton()}
          {enableTwitterLogin && this.renderTwitterLoginButton()}
          {enableGoogleLogin && this.renderGoogleLoginButton()}
          {enableDiscordLogin && this.renderDiscordLoginButton()}
        </ScrollView>
      </View>
    );
  };

  renderRightTopAsset = () => {
    const { rightTopAssetImageSource } = this.props;
    return (
      <View style={styles.rightTopAssetContainer}>
        <Image
          resizeMode="contain"
          source={rightTopAssetImageSource}
          style={styles.rightTopAssetImageStyle}
        />
      </View>
    );
  };

  renderLeftBottomAsset = () => {
    const { leftBottomAssetImageSource } = this.props;
    return (
      <View style={styles.leftBottomAssetContainer}>
        <Image
          resizeMode="contain"
          source={leftBottomAssetImageSource}
          style={styles.leftBottomAssetImageStyle}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderRightTopAsset()}
        <View style={styles.contentContainer}>
          {this.renderLoginTitle()}
          {this.renderTextFieldContainer()}
          {this.renderSocialButtons()}
        </View>
        {this.renderLeftBottomAsset()}
      </SafeAreaView>
    );
  }
}
