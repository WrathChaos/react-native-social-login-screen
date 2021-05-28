import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
  NativeScrollRectangle,
} from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  headerContainer: ViewStyle;
  headerContainerGlue: ViewStyle;
  headerBackImageStyle: ImageStyle;
  signUpTextStyle: TextStyle;
  loginTitleContainer: ViewStyle;
  loginTextStyle: TextStyle;
  textFieldContainer: ViewStyle;
  passwordTextFieldContainer: ViewStyle;
  forgotPasswordContainer: ViewStyle;
  forgotPasswordTextStyle: TextStyle;
  socialLoginButtonContainer: ViewStyle;
  facebookImageStyle: ImageStyle;
  socialLoginButtonImageStyle: ImageStyle;
  socialButtonsContainer: ViewStyle;
  socialButtonsContainerGlue: ViewStyle;
  socialLoginButtonsContentInset: NativeScrollRectangle;
  rightTopAssetContainer: ViewStyle;
  rightTopAssetImageStyle: ImageStyle;
  contentContainer: ViewStyle;
  leftBottomAssetContainer: ViewStyle;
  leftBottomAssetImageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 16,
    marginLeft: 32,
  },
  headerContainerGlue: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerBackImageStyle: {
    top: 1.5,
    width: 12,
    height: 12,
  },
  signUpTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: "#777684",
  },
  loginTitleContainer: {
    marginLeft: 32,
  },
  loginTextStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  textFieldContainer: {
    marginTop: 48,
  },
  passwordTextFieldContainer: {
    marginTop: 24,
  },
  forgotPasswordContainer: {
    marginTop: 24,
    marginLeft: 32,
  },
  forgotPasswordTextStyle: {
    fontSize: 14,
    color: "#b1b2ba",
  },
  socialLoginButtonContainer: {
    marginTop: 12,
  },
  facebookImageStyle: {
    width: 25,
    height: 25,
  },
  socialLoginButtonImageStyle: {
    left: 3,
    width: 25,
    height: 25,
  },
  socialButtonsContainer: {
    marginTop: 32,
  },
  socialButtonsContainerGlue: {
    paddingBottom: 32,
  },
  socialLoginButtonsContentInset: {
    bottom: 100,
  },
  contentContainer: {
    marginTop: ScreenHeight * 0.1,
  },
  rightTopAssetContainer: {
    top: -32,
    right: -24,
    position: "absolute",
  },
  rightTopAssetImageStyle: {
    width: ScreenWidth * 0.55,
    height: ScreenWidth * 0.55,
  },
  leftBottomAssetContainer: {
    left: -32,
    bottom: -32,
    position: "absolute",
  },
  leftBottomAssetImageStyle: {
    width: ScreenWidth * 0.7,
    height: ScreenWidth * 0.7,
  },
});
