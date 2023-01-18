import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Text,
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";
import { useAppDispatch } from "../../store/index";

export const SingleUser: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>cvcwecc</Text>
    </SafeAreaView>
  );
};
