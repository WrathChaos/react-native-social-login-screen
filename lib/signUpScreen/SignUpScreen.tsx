import * as React from "react";
import {
  Text,
  View,
  Image,
  TextStyle,
  SafeAreaView,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SignUpScreen.style";
import TextField from "../components/TextField/TextField";
import SocialButton from "../components/SocialButton/SocialButton";

// ? Assets
const backArrowImage = require("../local-assets/left-arrow.png");

export interface ISocialLoginProps {
  loginText?: string;
  loginTextStyle?: TextStyle;
  backArrowImageSource?: any;
  rightTopAssetImageSource?: any;
  signinTitleText?: string;
  signinTextStyle?: TextStyle;
  usernameTextFieldStyle?: TextStyle;
  usernamePlaceholder?: string;
  onUserNameChangeText?: (text: string) => void;
  passwordPlaceholder?: string;
  onPasswordChangeText?: (text: string) => void;
  passwordTextFieldStyle?: TextStyle;
  onloginTextPress?: () => void;
  signinText?: string;
  signinButtonBackgroundColor?: string;
  signinButtonShadowColor?: string;
  signinButtonSpinnerVisibility?: boolean;
  spinnerSize?: number;
  spinnerType?: string;
  signinButtonSpinnerColor?: string;
  onSigninPress: () => void;
  leftBottomAssetImageSource?: any;
  emailPlaceholder?: string;
  emailTextFieldStyle?: TextStyle;
  onEmailChangeText?: (text: string) => void;
  signinButtonContainer?: ViewStyle;
}

interface IState {}

export default class SignUpScreen extends React.PureComponent<
  ISocialLoginProps,
  IState
> {
  renderHeader = () => {
    const {
      loginText = "LOG IN",
      loginTextStyle,
      backArrowImageSource = backArrowImage,
      onloginTextPress,
    } = this.props;
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerContainerGlue}
          onPress={onloginTextPress}
        >
          <Image
            source={backArrowImageSource}
            style={styles.headerBackImageStyle}
          />
          <View>
            <Text style={[loginTextStyle, styles.loginTextStyle]}>
              {loginText}
            </Text>
          </View>
        </TouchableOpacity>
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

  renderSigninTitle = () => {
    const { signinTitleText = "Sign In", signinTextStyle } = this.props;
    return (
      <View style={styles.signinTitleContainer}>
        <Text style={[styles.signinTextStyle, signinTextStyle]}>
          {signinTitleText}
        </Text>
      </View>
    );
  };

  renderTextFieldContainer = () => {
    const {
      usernameTextFieldStyle,
      usernamePlaceholder = "john doe",
      onUserNameChangeText,
      passwordPlaceholder = "• • • • • • • •",
      onPasswordChangeText,
      passwordTextFieldStyle,
      emailPlaceholder = "john_due@gmail.com",
      emailTextFieldStyle,
      onEmailChangeText,
    } = this.props;
    return (
      <View style={styles.textFieldContainer}>
        <TextField
          {...this.props}
          placeholder={emailPlaceholder}
          textFieldStyle={emailTextFieldStyle}
          onChangeText={onEmailChangeText}
        />
        <View style={styles.usernameFieldContainer}>
          <TextField
            width="70%"
            {...this.props}
            placeholder={usernamePlaceholder}
            textFieldStyle={usernameTextFieldStyle}
            onChangeText={onUserNameChangeText}
          />
        </View>
        <View style={styles.passwordTextFieldContainer}>
          <TextField
            width="50%"
            secureTextEntry
            {...this.props}
            placeholder={passwordPlaceholder}
            textFieldStyle={passwordTextFieldStyle}
            onChangeText={onPasswordChangeText}
          />
        </View>
      </View>
    );
  };

  renderSigninButton = () => {
    const {
      signinText = "Sign in!",
      signinButtonBackgroundColor,
      signinButtonShadowColor = "#58a13f",
      signinButtonSpinnerVisibility,
      spinnerSize,
      spinnerType,
      signinButtonSpinnerColor,
      onSigninPress,
      signinButtonContainer,
    } = this.props;
    return (
      <View style={[styles.signinButtonContainer, signinButtonContainer]}>
        <SocialButton
          {...this.props}
          text={signinText}
          onPress={onSigninPress}
          shadowColor={signinButtonShadowColor}
          backgroundColor={signinButtonBackgroundColor}
          isSpinner={signinButtonSpinnerVisibility}
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={signinButtonSpinnerColor}
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
          {this.renderSigninTitle()}
          {this.renderTextFieldContainer()}
          {this.renderSigninButton()}
        </View>
        {this.renderLeftBottomAsset()}
      </SafeAreaView>
    );
  }
}
