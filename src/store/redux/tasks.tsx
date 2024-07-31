import { createSlice } from "@reduxjs/toolkit";
import { TaskModel } from "@/services/database/schemas/TaskSchema";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: "1",
        title: "Buy groceries",
        status: "todo",
        description: "Milk, Bread, Cheese, Eggs",
        createdAt: new Date("2023-07-01T10:00:00Z").toString(),
        updatedAt: new Date("2023-07-01T10:00:00Z").toString(),
      },
      {
        id: "2",
        title: "Read a book",
        status: "in-progress",
        description: "Finish reading the novel",
        createdAt: new Date("2023-07-02T12:00:00Z").toString(),
        updatedAt: new Date("2023-07-05T14:00:00Z").toString(),
      },
      {
        id: "3",
        title: "Workout",
        status: "done",
        description: "1 hour of cardio",
        createdAt: new Date("2023-07-03T08:00:00Z").toString(),
        updatedAt: new Date("2023-07-03T09:00:00Z").toString(),
      },
      {
        id: "4",
        title: "Call mom",
        status: "todo",
        description: "Catch up with mom over the phone",
        createdAt: new Date("2023-07-04T15:00:00Z").toString(),
        updatedAt: new Date("2023-07-04T15:00:00Z").toString(),
      },
      {
        id: "5",
        title: "Plan weekend trip",
        status: "in-progress",
        description: "Decide on destination and book accommodation",
        createdAt: new Date("2023-07-05T09:00:00Z").toString(),
        updatedAt: new Date("2023-07-06T11:00:00Z").toString(),
      },
      {
        id: "6",
        title: "Prepare presentation",
        status: "done",
        description: "Slides for the upcoming project meeting",
        createdAt: new Date("2023-07-06T07:00:00Z").toString(),
        updatedAt: new Date("2023-07-06T08:30:00Z").toString(),
      },
      {
        id: "7",
        title: "Update resume",
        status: "todo",
        description: "Add recent job experience",
        createdAt: new Date("2023-07-07T13:00:00Z").toString(),
        updatedAt: new Date("2023-07-07T13:00:00Z").toString(),
      },
      {
        id: "8",
        title: "Fix bike",
        status: "in-progress",
        description: "Repair flat tire",
        createdAt: new Date("2023-07-08T16:00:00Z").toString(),
        updatedAt: new Date("2023-07-09T17:00:00Z").toString(),
      },
      {
        id: "9",
        title: "Clean house",
        status: "done",
        description: "General cleaning and organizing",
        createdAt: new Date("2023-07-09T10:00:00Z").toString(),
        updatedAt: new Date("2023-07-09T13:00:00Z").toString(),
      },
      {
        id: "10",
        title: "Write blog post",
        status: "todo",
        description: "Post about recent trip",
        createdAt: new Date("2023-07-10T14:00:00Z").toString(),
        updatedAt: new Date("2023-07-10T14:00:00Z").toString(),
      },
    ] as TaskModel[],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    addTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      if (index !== -1) {
        state.tasks.splice(index, 1, action.payload.newTask);
      }

      // state.tasks.splice(
      //   state.tasks.indexOf(action.payload.task),
      //   1,
      //   action.payload.newTask
      // );
    },
  },
});

export const addTask = tasksSlice.actions.addTask;
export const addTasks = tasksSlice.actions.addTasks;
export const removeTask = tasksSlice.actions.removeTask;
export const editTask = tasksSlice.actions.editTask;
export default tasksSlice.reducer;
