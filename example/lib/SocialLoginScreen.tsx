import * as React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SocialLoginScreen.style";
import TextField from "./components/TextField/TextField";
import SocialButton from "./components/SocialButton/SocialButton";

interface IProps {
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
}

interface IState {}

export default class SocialLoginScreen extends React.PureComponent<
  IProps,
  IState
> {
  renderHeader = () => {
    const { onSignUpPress } = this.props;
    return (
      <View style={{ marginLeft: 32, marginTop: 16 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={onSignUpPress}
        >
          <Image
            source={require("../assets/left-arrow.png")}
            style={{ height: 12, width: 12, top: 1.5 }}
          />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8,
              color: "#777684",
              fontFamily: "Sansita-Bold",
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderLoginTitle = () => {
    return (
      <View
        style={{
          marginLeft: 32,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "Athelas-Bold",
          }}
        >
          Log In
        </Text>
      </View>
    );
  };

  renderTextFieldContainer = () => {
    return (
      <View style={{ marginTop: 48 }}>
        <TextField placeholder="toy_brise@jaunita.us" />
        <View
          style={{
            marginTop: 24,
          }}
        >
          <TextField
            width="70%"
            secureTextEntry
            placeholder="• • • • • • • •"
          />
        </View>
        {this.renderForgotPassword()}
      </View>
    );
  };

  renderForgotPassword = () => {
    const { onForgotPasswordPress } = this.props;
    return (
      <TouchableOpacity
        style={{
          marginTop: 24,
          marginLeft: 32,
        }}
        onPress={onForgotPasswordPress}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#b1b2ba",
            fontFamily: "Sansita-Bold",
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    );
  };

  renderSocialButtons = () => {
    return (
      <View style={{ marginTop: 32 }}>
        <SocialButton text="Let's cook!" onPress={() => {}} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.renderHeader()}
        <View style={{ marginTop: 100 }}>
          {this.renderLoginTitle()}
          {this.renderTextFieldContainer()}
          {this.renderSocialButtons()}
        </View>
      </SafeAreaView>
    );
  }
}
