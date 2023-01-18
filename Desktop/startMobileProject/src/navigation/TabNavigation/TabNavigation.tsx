import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { SvgXml } from "../../components";

import SingleUserStack from "../StackNavigation/SingleUserStack";
import { createNavigationContainerRef } from "@react-navigation/native";
export const navigationRef = createNavigationContainerRef();

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "white" },
        header: () => null,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "blue" : "black",
                fontSize: 12,
                fontFamily: "SF Pro Display Regular",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => <SvgXml xml="userIcon" />,
        }}
      />
      <Tab.Screen
        name="My Trials"
        component={SingleUserStack}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "blue" : "black",
                fontSize: 12,
                fontFamily: "SF Pro Display Regular",
              }}
            >
              Home
            </Text>
          ),

          tabBarIcon: ({ focused }) => <SvgXml xml="userIcon" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
