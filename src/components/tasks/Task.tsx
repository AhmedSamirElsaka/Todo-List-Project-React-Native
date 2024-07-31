import { View, StyleSheet, Text } from "react-native";
import IconButton from "../shared/IconButton";
import { TaskModel } from "@/services/database/schemas/TaskSchema";
import React from "react";
import { useDispatch } from "react-redux";
import { editTask, removeTask } from "@/store/redux/tasks";
import { deleteTask, updateTask } from "@/services/api/TaskApi";
import { useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const Task = ({ task, navigation }: { task: TaskModel; navigation: any }) => {
  const dispatch = useDispatch();

  const [isInternetConnected, setIsInternetConnected] = useState(false);

  // check internet connection to decide which edit the task in the database or to the api

  // NetInfo.fetch().then((state) => {
  //   if (state) {
  //     setIsInternetConnected(true);
  //     console.log("connected");
  //   } else {
  //   }
  // });

  const makeTaskDone = () => {
    dispatch(editTask({ task: task, newTask: { ...task, status: "done" } }));

    // edit task in the database
    // edit task in the api
    // if (isInternetConnected) {
    //   updateTask(task.id, { ...task, status: "done" });
    // }
  };
  const makeTaskNotDone = () => {
    dispatch(editTask({ task: task, newTask: { ...task, status: "todo" } }));

    // edit task in the database
    // edit task in the api

    // if (isInternetConnected) {
    //   updateTask(task.id, { ...task, status: "todo" });
    // }
  };
  const deleteTaskAction = () => {
    // delete task from the database
    // delete task from the api

    // if (isInternetConnected) {
    // deleteTask(task.id);
    // }
    dispatch(removeTask({ task: task }));
  };

  const editTaskAction = () => {
    navigation.navigate("EditTask", {
      taskId: task.id,
    });
  };
  return (
    <View style={styles.outerConatiner}>
      <View style={styles.leftInnerContainer}>
        {task.status === "done" ? (
          <IconButton
            iconName="checkedBox"
            width={30}
            height={30}
            onPress={makeTaskNotDone}
          />
        ) : (
          <IconButton
            iconName="uncheckedBox"
            width={30}
            height={30}
            onPress={makeTaskDone}
          />
        )}
        <View>
          <Text style={styles.taskName}>{task.title}</Text>
          <Text style={styles.taskDescripton}>{task.description}</Text>
        </View>
      </View>
      <View style={styles.rightInnerContainer}>
        <IconButton
          iconName="edit"
          width={30}
          height={30}
          style={styles.editButton}
          onPress={editTaskAction}
        />
        <IconButton
          iconName="delete"
          width={30}
          height={30}
          onPress={deleteTaskAction}
        />
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  outerConatiner: {
    backgroundColor: "#EDECEF",
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    borderRadius: 16,
    alignItems: "center",
  },
  leftInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 7,
  },
  rightInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    justifyContent: "space-between",
  },
  taskName: {
    marginLeft: 16,
  },
  taskDescripton: {
    marginLeft: 16,
    maxWidth: 200,
  },
  editButton: {
    marginLeft: 16,
  },
});
