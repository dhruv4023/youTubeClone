import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // mode: "dark",
  user: null,
  token: null,
  videos: null
};

export const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setMode: (state) => {
    //   state.mode = state.mode === "light" ? "dark" : "light";
    // },
    setVideos: (state, action) => {
      state.videos = action.payload.videos
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = `Bearer ${action.payload.token}`;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.chats = null;
      state.uploadedFiles = null;
    },
  },
});

export const {
  // setMode,
  setLogin,
  setLogout, setVideos
} = authState.actions;

export default authState.reducer;
