import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
/**
 * ? Local Imports
 */
import styles from "./SocialButton.style";

interface ISocialButtonProps {
  text?: string;
  shadowColor?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  component?: React.ReactNode;
  onPress: () => void;
}

const SocialButton = (props: ISocialButtonProps) => {
  const {
    text,
    component,
    shadowColor = "#757575",
    height = 85,
    width = "50%",
    backgroundColor = "#69bc4c",
    onPress,
  } = props;
  return (
    <Androw
      style={{
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor,
        shadowOffset: {
          width: 0,
          height: 3,
        },
      }}
    >
      <TouchableOpacity
        style={{
          width,
          height,
          backgroundColor,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
          marginLeft: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        {component || (
          <Text
            style={{
              color: "#fdfdfd",
              fontSize: 28,
              fontFamily: "Sansita-Bold",
            }}
          >
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </Androw>
  );
};

export default SocialButton;
