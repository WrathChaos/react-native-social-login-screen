import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  headerContainer: ViewStyle;
  headerContainerGlue: ViewStyle;
  headerBackImageStyle: ImageStyle;
  signUpTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {},
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
});
