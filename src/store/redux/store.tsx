import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasks";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableStateInvariantMiddleware
    }),
});
