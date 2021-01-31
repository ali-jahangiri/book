import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    timestamp: "",
    name: "",
    imageUrl: "",
    googleId: "",
    email: "",
  },
  reducers: {
    authUser: (state, action) => (state = action.payload),
    clearUserAuth: (state, action) => {
      state = {};
    },
  },
});
export const { authUser, clearUserAuth } = authSlice.actions;
export default authSlice.reducer;
