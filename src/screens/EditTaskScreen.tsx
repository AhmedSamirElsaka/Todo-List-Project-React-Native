import { View, Text, StyleSheet } from "react-native";
import Input from "@/components/shared/Input";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "@/store/redux/tasks";
import { TaskModel } from "@/services/database/schemas/TaskSchema";
import { updateTask } from "@/services/api/TaskApi";
import NetInfo from "@react-native-community/netinfo";
const EditTaskScreen = ({ route, navigation }: any) => {
  const taskId = route.params.taskId;

  const task = useSelector((state) => state.tasks.tasks).filter(
    (task: TaskModel) => task.id === taskId
  )[0];

  const [taskState, setTaskState] = useState<string>(task.status);
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [taskDescription, setTaskDescription] = useState<string>(
    task.description
  );
  const [isInternetConnected, setIsInternetConnected] = useState(false);

  const dispatch = useDispatch();

  // NetInfo.fetch().then((state) => {
  //   if (state) {
  //     setIsInternetConnected(true);
  //   } else {
  //   }
  // });

  const addNewTask = () => {
    dispatch(
      editTask({
        task: task,
        newTask: {
          id: task.id,
          title: taskTitle,
          status: taskState,
          description: taskDescription,
          createdAt: task.createdAt,
          updatedAt: new Date().toString(),
        },
      })
    );

    if (isInternetConnected) {
      updateTask(task.id, {
        id: task.id,
        title: taskTitle,
        status: taskState,
        description: taskDescription,
        createdAt: task.createdAt,
        updatedAt: new Date().toString(),
        isSynced: true,
      });
    }
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
        Edit Task
      </Button>
    </View>
  );
};

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

export default EditTaskScreen;
