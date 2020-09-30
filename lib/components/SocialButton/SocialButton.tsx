import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
/**
 * ? Local Imports
 */
import styles, { _shadowStyle, _container } from "./SocialButton.style";

interface ISocialButtonProps {
  text?: string;
  shadowColor?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  component?: React.ReactNode;
  loginButtonTextStyle?: any;
  onPress: () => void;
}

const SocialButton = (props: ISocialButtonProps) => {
  const {
    text,
    component,
    height = 85,
    width = "50%",
    loginButtonTextStyle,
    shadowColor = "#757575",
    backgroundColor = "#69bc4c",
    onPress,
  } = props;
  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <TouchableOpacity
        style={_container(width, height, backgroundColor)}
        onPress={onPress}
      >
        {component || (
          <Text style={[styles.buttonTextStyle, loginButtonTextStyle]}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </Androw>
  );
};

export default SocialButton;
