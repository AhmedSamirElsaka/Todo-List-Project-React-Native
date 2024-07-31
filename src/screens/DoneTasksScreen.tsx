import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Task from "@/components/tasks/Task";
import { TaskModel } from "@/services/database/schemas/TaskSchema";
import { useSelector, useDispatch } from "react-redux";

const DoneTasksScreen = () => {
  interface TodoItem {
    id: string;
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
    createdAt: Date;
    updatedAt: Date;
  }
  const tasksRedux = useSelector((state) => state.tasks.tasks).filter(
    (task) => task.status === "done"
  );
  const dispatch = useDispatch();

  const items: TaskModel[] = [
    {
      id: "1",
      title: "Buy groceries",
      description: "Milk, Bread, Cheese, Eggs",
      status: "todo",
      createdAt: new Date("2023-07-01T10:00:00Z"),
      updatedAt: new Date("2023-07-01T10:00:00Z"),
    },
    {
      id: "2",
      title: "Read a book",
      description: "Finish reading the novel",
      status: "in-progress",
      createdAt: new Date("2023-07-02T12:00:00Z"),
      updatedAt: new Date("2023-07-05T14:00:00Z"),
    },
    {
      id: "3",
      title: "Workout",
      description: "1 hour of cardio",
      status: "done",
      createdAt: new Date("2023-07-03T08:00:00Z"),
      updatedAt: new Date("2023-07-03T09:00:00Z"),
    },
    {
      id: "4",
      title: "Call mom",
      description: "Catch up with mom over the phone",
      status: "todo",
      createdAt: new Date("2023-07-04T15:00:00Z"),
      updatedAt: new Date("2023-07-04T15:00:00Z"),
    },
    {
      id: "5",
      title: "Plan weekend trip",
      description: "Decide on destination and book accommodation",
      status: "in-progress",
      createdAt: new Date("2023-07-05T09:00:00Z"),
      updatedAt: new Date("2023-07-06T11:00:00Z"),
    },
    {
      id: "6",
      title: "Prepare presentation",
      description: "Slides for the upcoming project meeting",
      status: "done",
      createdAt: new Date("2023-07-06T07:00:00Z"),
      updatedAt: new Date("2023-07-06T08:30:00Z"),
    },
    {
      id: "7",
      title: "Update resume",
      description: "Add recent job experience",
      status: "todo",
      createdAt: new Date("2023-07-07T13:00:00Z"),
      updatedAt: new Date("2023-07-07T13:00:00Z"),
    },
    {
      id: "8",
      title: "Fix bike",
      description: "Repair flat tire",
      status: "in-progress",
      createdAt: new Date("2023-07-08T16:00:00Z"),
      updatedAt: new Date("2023-07-09T17:00:00Z"),
    },
    {
      id: "9",
      title: "Clean house",
      description: "General cleaning and organizing",
      status: "done",
      createdAt: new Date("2023-07-09T10:00:00Z"),
      updatedAt: new Date("2023-07-09T13:00:00Z"),
    },
    {
      id: "10",
      title: "Write blog post",
      description: "Post about recent trip",
      status: "todo",
      createdAt: new Date("2023-07-10T14:00:00Z"),
      updatedAt: new Date("2023-07-10T14:00:00Z"),
    },
  ];

  return (
    <View style={style.container}>
      a
      <View style={style.firstInnerContainer}>
        <FlatList
          data={tasksRedux}
          renderItem={({ item }) => <Task task={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default DoneTasksScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
    backgroundColor: "yellow",
    width: 50,
    height: 50,
    paddingBottom: 10,
    paddingEnd: 10,
  },
});
