import { View, Text, StyleSheet } from "react-native";
import Input from "@/components/shared/Input";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/store/redux/tasks";
import { storeTask } from "@/services/api/TaskApi";
import NetInfo from "@react-native-community/netinfo";

const AddTaskScreen = ({ navigation }: any) => {
  const [taskState, setTaskState] = useState<string>("todo");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const dispatch = useDispatch();
  const tasksRedux = useSelector((state) => state.tasks.tasks);
  const [isInternetConnected, setIsInternetConnected] = useState(false);

  // NetInfo.fetch().then((state) => {
  //   if (state) {
  //     setIsInternetConnected(true);
  //   } else {
  //   }
  // });

  const addNewTask = () => {
    // add the task in the state management
    dispatch(
      addTask({
        id: tasksRedux.length + 1,
        title: taskTitle,
        status: taskState,
        description: taskDescription,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        isSynced: false,
      })
    );
    // add the task in the api
    storeTask({
      id: tasksRedux.length + 1,
      title: taskTitle,
      status: taskState,
      description: taskDescription,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      isSynced: false,
    });

    // add task to local storage

    navigation.goBack();
  };
  return (
    <View style={{ ...styles.container }}>
      <Input
        label="Title"
        onUpdateValue={setTaskTitle}
        value={taskTitle}
        // isInvalid={emailIsInvalid}
      />
      <Input
        label="Description"
        onUpdateValue={setTaskDescription}
        value={taskDescription}
        // isInvalid={emailIsInvalid}
      />
      <Text style={styles.statusLabel}>Status</Text>
      <Picker
        selectedValue={taskState}
        style={styles.picker}
        onValueChange={(itemValue) => setTaskState(itemValue)}
      >
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="Inprogress" value="inprogress" />
        <Picker.Item label="Done" value="done" />
      </Picker>

      <Button onPress={addNewTask} style={styles.addTaskButton}>
        Add Task
      </Button>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 16,
  },
  statusLabel: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  picker: {
    marginHorizontal: 8,
    backgroundColor: "white",
  },
  addTaskButton: {
    marginTop: 64,
    marginHorizontal: 16,
  },
});
