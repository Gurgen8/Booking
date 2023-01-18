import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LinearGradient from "react-native-linear-gradient";
// import { HeaderBackButton, HeaderTitle } from "../components";
// import { rootStyles } from "../styles";
// import { ROUTES } from "../constants";
import { TodoList } from "../../screens";

const Stack = createNativeStackNavigator();

const MyTrialStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"TodoList"}
      //   screenOptions={{
      //     headerBackground: () => (
      //       <LinearGradient
      //         colors={['#233D4D', '#1C5D85']}
      //         style={rootStyles.flex1}
      //         start={{ x: 0, y: 0 }}
      //         end={{ x: 0, y: 1 }}
      //       />
      //     ),
      //     headerTitle: ({ children }) => <HeaderTitle title={children} />,
      //     headerLeft: () => <HeaderBackButton />,
      //     headerTitleAlign: 'center',
      //     headerBackVisible: false,
      //   }}
    >
      <Stack.Screen
        name={"TodoList"}
        component={TodoList}
        // options={{
        //   headerTitle: () => <HeaderTitle title="TRIAL DETAILS" />,
        //   headerLeft: () => <HeaderBackButton />,
        // }}
      />
      {/* <Stack.Screen
        name={ROUTES.SURVEY}
        component={Survey}
        options={{
          headerTitle: () => <HeaderTitle title="SURVEY" />,
          headerLeft: () => <HeaderBackButton />,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default MyTrialStack;
