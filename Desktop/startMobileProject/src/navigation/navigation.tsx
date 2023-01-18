import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../store/index";
import TabNavigation, { navigationRef } from "./TabNavigation/TabNavigation";

function Navigation() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <TabNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default Navigation;
