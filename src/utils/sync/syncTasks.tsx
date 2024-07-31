import NetInfo from "@react-native-community/netinfo";
// import { fetchTodosAction, addTodoAction, updateTodoAction, deleteTodoAction } from '../redux/actions';
// import store from '../redux/store';
// import realm from './realm';
import { addTask, addTasks, removeTask, editTask } from "@/store/redux/tasks";
import { useSelector } from "react-redux";
import React from "react";
import { TaskModel } from "@/services/database/schemas/TaskSchema";
import { storeTask } from "@/services/api/TaskApi";

// Initialize network monitoring and sync logic
const syncTasks = () => {
  NetInfo.addEventListener((state) => {
    if (state.isConnected) {
      console.log("Connected");
    }
  });
};
export default syncTasks;
