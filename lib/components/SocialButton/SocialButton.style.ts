import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  buttonTextStyle: TextStyle;
}

export const _shadowStyle = (shadowColor: string): ViewStyle => ({
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowColor,
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _container = (
  width: number | string,
  height: number | string,
  backgroundColor: string,
): ViewStyle => ({
  width,
  height,
  backgroundColor,
  marginLeft: "auto",
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
});

export default StyleSheet.create<Style>({
  buttonTextStyle: {
    fontSize: 28,
    color: "#fdfdfd",
  },
});
