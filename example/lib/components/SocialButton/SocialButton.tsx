import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
/**
 * ? Local Imports
 */
import styles from "./SocialButton.style";

interface ISocialButtonProps {
  text: string;
  onPress: () => void;
}

const SocialButton = (props: ISocialButtonProps) => {
  const { text, onPress } = props;
  return (
    <Androw
      style={{
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#757575",
        shadowOffset: {
          width: 0,
          height: 3,
        },
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: 85,
          width: "50%",
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          marginLeft: "auto",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#69bc4c",
        }}
        onPress={onPress}
      >
        <Text
          style={{ color: "#fdfdfd", fontSize: 28, fontFamily: "Sansita-Bold" }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Androw>
  );
};

export default SocialButton;
