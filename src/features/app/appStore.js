import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";
import directorySlice from "../directory/directorySLice";

export default configureStore({
  reducer: { auth: authSlice, directory: directorySlice },
});
