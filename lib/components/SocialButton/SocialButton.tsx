import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Spinner from "react-native-spinkit";
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
  isSpinner?: boolean;
  spinnerSize?: number;
  spinnerType?: string;
  spinnerColor?: string;
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
    isSpinner = false,
    spinnerSize = 16,
    spinnerType = "Circle",
    spinnerColor = "#fff",
    onPress,
  } = props;

  const renderSpinner = () => {
    return (
      <View>
        <Spinner
          size={spinnerSize}
          type={spinnerType}
          color={spinnerColor}
          isVisible={isSpinner}
        />
      </View>
    );
  };

  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <TouchableOpacity
        style={_container(width, height, backgroundColor)}
        onPress={onPress}
      >
        {isSpinner
          ? renderSpinner()
          : component || (
              <Text style={[styles.buttonTextStyle, loginButtonTextStyle]}>
                {text}
              </Text>
            )}
      </TouchableOpacity>
    </Androw>
  );
};

export default SocialButton;
