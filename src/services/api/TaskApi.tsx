import axios, { Axios } from "axios";
import { TaskModel } from "../database/schemas/TaskSchema";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
export async function storeTask(task: TaskModel) {
  const response = await axios.post(BASE_URL + "/todos", {
    userId: 1,
    id: task.id,
    title: task.title,
    completed: task.status === "done" ? true : false,
  });
}

export async function fetchTasks() {
  const response = await axios.get(BASE_URL + "/todos");

  const tasks = [];

  for (const key in response.data) {
    const task = {
      id: response.data[key].id,
      title: response.data[key].title,
      status: response.data[key].completed === true ? "done" : "todo",
      description: response.data[key].title,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      isSynced: true,
    } as TaskModel;

    tasks.push(task);
  }
  return tasks;
}

export function updateTask(id: string, taskData: TaskModel) {
  return axios.put(BASE_URL + `/todos/${id}`, taskData);
}

export function deleteTask(id: string) {
  return axios.delete(BASE_URL + `/todos/${id}`);
}
