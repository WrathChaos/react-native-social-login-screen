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
  signinText?: string;
  signinTextStyle?: TextStyle;
  backArrowImageSource?: any;
  rightTopAssetImageSource?: any;
  signupTitleText?: string;
  signupTextStyle?: TextStyle;
  repasswordTextFieldStyle?: TextStyle;
  repasswordPlaceholder?: string;
  onRepasswordChangeText?: (text: string) => void;
  passwordPlaceholder?: string;
  onPasswordChangeText?: (text: string) => void;
  passwordTextFieldStyle?: TextStyle;
  onloginTextPress?: () => void;
  signupText?: string;
  signupButtonBackgroundColor?: string;
  signupButtonShadowColor?: string;
  signupButtonSpinnerVisibility?: boolean;
  spinnerSize?: number;
  spinnerType?: string;
  signupButtonSpinnerColor?: string;
  onSignupPress: () => void;
  leftBottomAssetImageSource?: any;
  emailPlaceholder?: string;
  emailTextFieldStyle?: TextStyle;
  onEmailChangeText?: (text: string) => void;
  signupButtonContainer?: ViewStyle;
}

interface IState {}

export default class SignUpScreen extends React.PureComponent<
  ISocialLoginProps,
  IState
> {
  renderHeader = () => {
    const {
      signinText = "LOG IN",
      signinTextStyle,
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
            <Text style={[signinTextStyle, styles.signinTextStyle]}>
              {signinText}
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

  renderSignupTitle = () => {
    const { signupTitleText = "Sign Up", signupTextStyle } = this.props;
    return (
      <View style={styles.signupTitleContainer}>
        <Text style={[styles.signupTextStyle, signupTextStyle]}>
          {signupTitleText}
        </Text>
      </View>
    );
  };

  renderTextFieldContainer = () => {
    const {
      repasswordTextFieldStyle,
      repasswordPlaceholder = "• • • • • • •",
      onRepasswordChangeText,
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
        <View style={styles.repasswordFieldContainer}>
          <TextField
            width="50%"
            {...this.props}
            placeholder={repasswordPlaceholder}
            textFieldStyle={repasswordTextFieldStyle}
            onChangeText={onRepasswordChangeText}
          />
        </View>
      </View>
    );
  };

  renderSignupButton = () => {
    const {
      signupText = "Sign up!",
      signupButtonBackgroundColor,
      signupButtonShadowColor = "#58a13f",
      signupButtonSpinnerVisibility,
      spinnerSize,
      spinnerType,
      signupButtonSpinnerColor,
      onSignupPress,
      signupButtonContainer,
    } = this.props;
    return (
      <View style={[styles.signupButtonContainer, signupButtonContainer]}>
        <SocialButton
          {...this.props}
          text={signupText}
          onPress={onSignupPress}
          shadowColor={signupButtonShadowColor}
          backgroundColor={signupButtonBackgroundColor}
          isSpinner={signupButtonSpinnerVisibility}
          spinnerSize={spinnerSize}
          spinnerType={spinnerType}
          spinnerColor={signupButtonSpinnerColor}
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
          {this.renderSignupTitle()}
          {this.renderTextFieldContainer()}
          {this.renderSignupButton()}
        </View>
        {this.renderLeftBottomAsset()}
      </SafeAreaView>
    );
  }
}
