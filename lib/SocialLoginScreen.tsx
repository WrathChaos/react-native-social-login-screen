import * as React from "react";
import {
  Text,
  View,
  Image,
  TextStyle,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ViewStyle,
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
const appleLogo = require("./local-assets/apple-logo.png");

export interface ISocialLoginProps {
  loginText?: string;
  signUpText?: string;
  loginTitleText?: string;
  forgotPasswordText?: string;
  loginButtonShadowColor?: string;
  loginButtonBackgroundColor?: string;
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
  enableAppleLogin?: boolean;
  enableFacebookLogin?: boolean;
  enableTwitterLogin?: boolean;
  enableGoogleLogin?: boolean;
  enableDiscordLogin?: boolean;
  backArrowImageSource?: any;
  loginButtonTextStyle?: any;
  usernameTextFieldStyle?: any;
  passwordTextFieldStyle?: any;
  rightTopAssetImageSource?: any;
  leftBottomAssetImageSource?: any;
  loginButtonSpinnerVisibility?: boolean;
  facebookSpinnerVisibility?: boolean;
  discordSpinnerVisibility?: boolean;
  twitterSpinnerVisibility?: boolean;
  googleSpinnerVisibility?: boolean;
  spinnerSize?: number;
  spinnerType?: string;
  loginButtonSpinnerColor?: string;
  facebookSpinnerColor?: string;
  twitterSpinnerColor?: string;
  googleSpinnerColor?: string;
  discordSpinnerColor?: string;
  disableSignUp?: boolean;
  appleSpinnerColor?: string;
  appleSpinnerVisibility?: boolean;
  disableForgotButton?: boolean;
  loginTextStyle?: TextStyle;
  signUpTextStyle?: TextStyle;
  forgotPasswordTextStyle?: TextStyle;
  onLoginPress: () => void;
  onAppleLoginPress?: () => void;
  onForgotPasswordPress: () => void;
  onFacebookLoginPress?: () => void;
  onTwitterLoginPress?: () => void;
  onGoogleLoginPress?: () => void;
  onDiscordLoginPress?: () => void;
  onUserNameChangeText: (text: string) => void;
  onPasswordChangeText: (text: string) => void;
  //? Only Sign Up Screen Props
  onSignUpPress: (isSignUp: boolean) => void;
  onRepasswordChangeText?: (text: string) => void;
}

interface IState {
  isSignUp: boolean;
}

export default class SocialLoginScreen extends React.PureComponent<
  ISocialLoginProps,
  IState
> {
  constructor(props: ISocialLoginProps) {
    super(props);
    this.state = {
      isSignUp: false,
    };
  }
  renderHeader = () => {
    const {
      signUpText = "SIGN UP",
      disableSignUp,
      signUpTextStyle,
      backArrowImageSource = backArrowImage,
    } = this.props;
    return (
      !disableSignUp && (
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerContainerGlue}
            onPress={() => {
              this.setState({ isSignUp: !this.state.isSignUp }, () => {
                this.props.onSignUpPress &&
                  this.props.onSignUpPress(this.state.isSignUp);
              });
            }}
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
      )
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
        {this.state.isSignUp
          ? this.renderRepasswordContainer()
          : this.renderForgotPassword()}
      </View>
    );
  };

  renderRepasswordContainer = () => {
    const {
      passwordPlaceholder = "• • • • • • • •",
      onRepasswordChangeText,
      passwordTextFieldStyle,
    } = this.props;
    return (
      <View style={styles.passwordTextFieldContainer}>
        <TextField
          width="70%"
          secureTextEntry
          {...this.props}
          placeholder={passwordPlaceholder}
          textFieldStyle={passwordTextFieldStyle}
          onChangeText={onRepasswordChangeText}
        />
      </View>
    );
  };

  renderForgotPassword = () => {
    const {
      forgotPasswordText = "Forgot Password?",
      forgotPasswordTextStyle,
      onForgotPasswordPress,
      disableForgotButton,
    } = this.props;
    return (
      !disableForgotButton && (
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={onForgotPasswordPress}
        >
          <Text
            style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}
          >
            {forgotPasswordText}
          </Text>
        </TouchableOpacity>
      )
    );
  };

  renderClassicLoginButton = () => {
    const {
      loginText = "Let's cook!",
      loginButtonBackgroundColor,
      loginButtonShadowColor = "#58a13f",
      loginButtonSpinnerVisibility,
      spinnerSize,
      spinnerType,
      loginButtonSpinnerColor,
      onLoginPress,
    } = this.props;
    return (
      <SocialButton
        {...this.props}
        text={loginText}
        onPress={onLoginPress}
        shadowColor={loginButtonShadowColor}
        backgroundColor={loginButtonBackgroundColor}
        isSpinner={loginButtonSpinnerVisibility}
        spinnerSize={spinnerSize}
        spinnerType={spinnerType}
        spinnerColor={loginButtonSpinnerColor}
      />
    );
  };

  renderFacebookLoginButton = () => {
    const {
      onFacebookLoginPress,
      facebookSpinnerVisibility,
      spinnerSize,
      spinnerType,
      facebookSpinnerColor,
    } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          shadowColor="#2f4a82"
          backgroundColor="#4267B2"
          isSpinner={facebookSpinnerVisibility}
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={facebookSpinnerColor}
          component={
            <Image source={facebookLogo} style={styles.facebookImageStyle} />
          }
          onPress={() => onFacebookLoginPress && onFacebookLoginPress()}
        />
      </View>
    );
  };

  renderAppleLoginButton = () => {
    const {
      spinnerSize,
      spinnerType,
      appleSpinnerColor,
      onAppleLoginPress,
      appleSpinnerVisibility,
    } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          shadowColor="#1c1c1c"
          backgroundColor="#1c1c1c"
          isSpinner={appleSpinnerVisibility}
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={appleSpinnerColor}
          component={
            <Image source={appleLogo} style={styles.appleImageStyle} />
          }
          onPress={() => onAppleLoginPress && onAppleLoginPress()}
        />
      </View>
    );
  };

  renderTwitterLoginButton = () => {
    const {
      onTwitterLoginPress,
      twitterSpinnerVisibility,
      spinnerSize,
      spinnerType,
      twitterSpinnerColor,
    } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#1DA1F2"
          shadowColor="#1a7aab"
          isSpinner={twitterSpinnerVisibility}
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={twitterSpinnerColor}
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
    const {
      onGoogleLoginPress,
      googleSpinnerVisibility,
      spinnerSize,
      spinnerType,
      googleSpinnerColor,
    } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#fff"
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={googleSpinnerColor}
          isSpinner={googleSpinnerVisibility}
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
    const {
      spinnerSize,
      spinnerType,
      discordSpinnerColor,
      onDiscordLoginPress,
      discordSpinnerVisibility,
    } = this.props;
    return (
      <View style={styles.socialLoginButtonContainer}>
        <SocialButton
          width={60}
          height={60}
          backgroundColor="#7289DA"
          shadowColor="#4e5e96"
          isSpinner={discordSpinnerVisibility}
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={discordSpinnerColor}
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
      enableAppleLogin,
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
          {enableAppleLogin && this.renderAppleLoginButton()}
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

  renderContent = () => {
    return (
      <View>
        {this.renderHeader()}
        {this.renderRightTopAsset()}
        <View style={styles.contentContainer}>
          {this.renderLoginTitle()}
          {this.renderTextFieldContainer()}
          {this.renderSocialButtons()}
        </View>
        {this.renderLeftBottomAsset()}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderContent()}
      </SafeAreaView>
    );
  }
}
