import React from "react";
import { TextInput, TextInputProps } from "react-native";
/**
 * ? Local Imports
 */
import { _textInputStyle } from "./TextField.style";

interface ITextFieldProps extends TextInputProps {
  width?: number | string;
}

const TextField = (props: ITextFieldProps) => {
  const { width = "85%" } = props;
  return <TextInput style={_textInputStyle(width)} {...props} />;
};

export default TextField;
