import * as React from "react";
import { TextInput, TextInputProps } from "react-native";
/**
 * ? Local Imports
 */
import { _textInputStyle } from "./TextField.style";

interface ITextFieldProps extends TextInputProps {
  width?: number | string;
  textFieldStyle?: any;
}

const TextField = (props: ITextFieldProps) => {
  const { width = "85%", textFieldStyle } = props;
  return (
    <TextInput
      placeholderTextColor="#ccc"
      {...props}
      style={[_textInputStyle(width), textFieldStyle]}
    />
  );
};

export default TextField;
