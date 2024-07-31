import Homescreen from "@/screens/HomeScreen";
import { Text, View, StyleSheet } from "react-native";
import { RealmProvider } from "@realm/react";
import { Task } from "@/services/database/schemas/TaskSchema";
import React from "react";
import AppStackNavigator from "@/navigation/app-stack-navigator";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store";
import { useEffect } from "react";
import syncTasks from "@/utils/sync/syncTasks";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  useEffect(() => {
    syncTasks();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Provider store={store}>
        {/* <RealmProvider schema={[Task]}> */}
        <AppStackNavigator />
        {/* </RealmProvider> */}
      </Provider>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
