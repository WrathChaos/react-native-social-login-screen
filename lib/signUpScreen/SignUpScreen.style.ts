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
  loginTextStyle: TextStyle;
  signinTextStyle: TextStyle;
  signinTitleContainer: ViewStyle;
  textFieldContainer: ViewStyle;
  passwordTextFieldContainer: ViewStyle;
  rightTopAssetContainer: ViewStyle;
  rightTopAssetImageStyle: ImageStyle;
  contentContainer: ViewStyle;
  leftBottomAssetContainer: ViewStyle;
  leftBottomAssetImageStyle: ImageStyle;
  signinButtonContainer: ViewStyle;
  usernameFieldContainer: ViewStyle;
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
  loginTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: "#777684",
  },
  signinTextStyle: {
    fontSize: 40,
  },
  signinTitleContainer: {
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
  signinButtonContainer: {
    marginTop: 44,
  },
  usernameFieldContainer: {
    marginTop: 24,
  },
});
