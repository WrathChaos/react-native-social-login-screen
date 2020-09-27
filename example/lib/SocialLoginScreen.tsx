import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SocialLoginScreen.style";

interface IProps {}

interface IState {}

export default class SocialLoginScreen extends React.PureComponent<
  IProps,
  IState
> {
  renderHeader = () => {
    return (
      <View style={{ marginLeft: 32, marginTop: 16 }}>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.renderHeader()}
        <View style={{ marginTop: 64 }}>
          <View
            style={{
              marginLeft: 32,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 32 }}>LOG IN</Text>
          </View>
          <View style={{ marginTop: 48 }}>
            <TextInput
              placeholder="toy_brise@jaunita.us"
              style={{
                width: "85%",
                fontSize: 15,
                paddingLeft: 32,
                paddingBottom: 12,
                fontWeight: "600",
                borderColor: "#eee",
                borderBottomWidth: 1,
              }}
            />
            <TextInput
              secureTextEntry
              placeholder="• • • • • • • •"
              style={{
                width: "70%",
                fontSize: 15,
                marginTop: 24,
                paddingLeft: 32,
                paddingBottom: 12,
                fontWeight: "600",
                borderColor: "#eee",
                borderBottomWidth: 1,
              }}
            />

            <TouchableOpacity
              style={{
                marginTop: 24,
                marginLeft: 32,
              }}
              onPress={() => {}}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#ccc",
                  fontWeight: "600",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
