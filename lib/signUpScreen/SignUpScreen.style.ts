import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  headerContainer: ViewStyle;
  headerContainerGlue: ViewStyle;
  headerBackImageStyle: ImageStyle;
  signinTextStyle: TextStyle;
  signupTextStyle: TextStyle;
  signupTitleContainer: ViewStyle;
  textFieldContainer: ViewStyle;
  passwordTextFieldContainer: ViewStyle;
  rightTopAssetContainer: ViewStyle;
  rightTopAssetImageStyle: ImageStyle;
  contentContainer: ViewStyle;
  leftBottomAssetContainer: ViewStyle;
  leftBottomAssetImageStyle: ImageStyle;
  signupButtonContainer: ViewStyle;
  repasswordFieldContainer: ViewStyle;
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
  signinTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: "#777684",
  },
  signupTextStyle: {
    fontSize: 40,
  },
  signupTitleContainer: {
    marginLeft: 32,
  },
  textFieldContainer: {
    marginTop: 48,
  },
  passwordTextFieldContainer: {
    marginTop: 24,
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
  signupButtonContainer: {
    marginTop: 44,
  },
  repasswordFieldContainer: {
    marginTop: 24,
  },
});
