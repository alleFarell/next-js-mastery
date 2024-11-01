import { configureStore } from "@reduxjs/toolkit";
import viewConfigurationReducer from "./slice/ViewConfiguration";
import SidebarSlice from "./slice/SidebarSlice";

const store = configureStore({
  reducer: {
    viewConfig: viewConfigurationReducer,
    sibarConfig: SidebarSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
