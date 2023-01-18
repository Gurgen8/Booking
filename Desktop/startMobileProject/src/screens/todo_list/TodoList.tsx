import React, { FC, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  BackHandler,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { SvgXml } from "../../components/index";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { UserScreenNavigationProp } from "navigation/combine_screens";
import { CompanyName, SingleTodo } from "../../components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../../store/index";
import {
  SwipeItem,
  SwipeProvider,
  SwipeButtonsContainer,
} from "react-native-swipe-item";
import { useAppDispatch } from "../../store/index";
import { deleteTodo } from "../../store/reducers/todos/todoSlice";
import { TodoObjectType } from "store/reducers/todos/types";

export const TodoList: FC = () => {
  const navigation = useNavigation<UserScreenNavigationProp>();
  let todoData = useAppSelector((state) => state.TodoList);
  const dispatch = useAppDispatch();

  const renderItem = ({ item }: { item: TodoObjectType }) => {
    const rightButton = (
      <SwipeButtonsContainer>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            dispatch(deleteTodo(item.id));
          }}
        >
          <Text style={styles.deleteTextStyle}>Delete</Text>
        </TouchableOpacity>
      </SwipeButtonsContainer>
    );

    return (
      <SwipeItem style={styles.button} rightButtons={rightButton}>
        <SingleTodo name={item.text} checked={item.checked} />
      </SwipeItem>
    );
  };

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => {
      backHandler.remove();
    };
  });

  return (
    <SafeAreaView style={styles.container} edges={["right", "left", "top"]}>
      <View style={styles.body}>
        <CompanyName name={"AzaliaNow"} localStyle={styles.name} />
        <SwipeProvider mode="single" closeTrigger="onItemMoved">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={todoData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </SwipeProvider>

        <TouchableOpacity
          style={styles.addTodoIcon}
          onPress={() => {
            navigation.navigate("AddTodo");
          }}
        >
          <SvgXml xml="AddIcon" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
