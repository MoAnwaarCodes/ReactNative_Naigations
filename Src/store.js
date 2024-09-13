import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/Todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;