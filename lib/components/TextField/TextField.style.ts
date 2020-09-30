import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export const _textInputStyle = (width: number | string): TextStyle => ({
  width,
  fontSize: 18,
  paddingLeft: 32,
  color: "#52535a",
  paddingBottom: 12,
  borderBottomWidth: 1,
  borderColor: "#e1e1f2",
});

export default StyleSheet.create<Style>({
  container: {},
});
