import { getGreeting } from "@/utils/helpers";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import IconButton from "@/components/shared/IconButton";
import Task from "@/components/tasks/Task";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addTask, addTasks } from "@/store/redux/tasks";
import { TaskModel } from "@/services/database/schemas/TaskSchema";
import { useEffect, useState } from "react";
import { fetchTasks } from "@/services/api/TaskApi";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import Button from "@/components/shared/Button";

const Homescreen = () => {
  const TimeNow = getGreeting(new Date().getHours());
  const today = new Date();

  const navigation = useNavigation();
  const tasksRedux = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isInternetConnected, setIsInternetConnected] = useState(false);

  const netInfo = useNetInfo();

  // NetInfo.fetch().then((state) => {
  //   if (state) {
  //     setIsInternetConnected(true);
  //   } else {
  //   }
  // });

  const fetchData = async () => {
    if (isInternetConnected) {
      try {
        const tasks = await fetchTasks();
        dispatch(addTasks({ tasks: tasks }));
      } catch (error: any) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    } else {
      // fetch data from database
      // try {
      // } catch (error: any) {
      //   setError(error);
      // } finally {
      //   setIsFetching(false);
      // }
    }
  };

  fetchData();

  if (error !== "") {
    return (
      <View
        style={[
          style.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={style.errorText}>{error}</Text>
      </View>
    );
  }

  if (isFetching) {
    return (
      <View
        style={[
          style.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const addTaskAction = () => {
    navigation.navigate("AddTask");
  };

  const manualSync = () => {};
  return (
    <View style={style.container}>
      <View style={style.firstInnerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={style.greetingText}>Good {TimeNow}</Text>
            <Text>
              It’s {format(today, "eeee, LLL dd")}
              {/* {tasksRedux.length} tasks */}
            </Text>
          </View>
          <Button onPress={manualSync} style={{ marginLeft: "auto" }}>
            Manual Sync
          </Button>
        </View>
        <FlatList
          data={tasksRedux}
          renderItem={({ item }) => (
            <Task task={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />

        <View style={style.addTaskView}>
          <IconButton
            onPress={addTaskAction}
            style={style.addTaskButton}
            iconName="add"
            width={40}
            height={40}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default Homescreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingTop: 16,
    backgroundColor: "white",
  },
  firstInnerContainer: {
    flex: 1,
  },
  secondInnerContainer: {
    flex: 15,
  },
  greetingText: {
    fontSize: 25,
  },
  addTaskView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  addTaskButton: {
    borderRadius: 25,
    backgroundColor: "black",
    width: 50,
    height: 50,
    paddingBottom: 10,
    paddingEnd: 10,
  },
  errorText: {
    color: "red",
    fontSize: 25,
  },
});
