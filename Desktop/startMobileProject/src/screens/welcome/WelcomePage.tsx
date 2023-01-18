import React, { FC, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { CompanyName } from "../../components/index";
import { colors } from "../../constants/colors";
import { UserScreenNavigationProp } from "navigation/combine_screens";

export const WelcomePage: FC = () => {
  const navigation = useNavigation<UserScreenNavigationProp>();

  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.navigate("TodoList");
    }, 3000);
    return () => {
      clearTimeout(interval);
      console.log("ddddd");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CompanyName name={"AzaliaNow"} localStyle={{ marginBottom: 48 }} />
      <View>
        <ActivityIndicator size="small" color={colors.red} />
      </View>
    </SafeAreaView>
  );
};
