import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  loading: false,
};

const songs = createSlice({
  name: "music",
  initialState,
  reducers: {
    fetch: (state, _) => {
      state.loading = true;
    },
    setSong: (state, action) => {
      state.songs = action.payload;
      state.loading = false
    },
  },
});
const { reducer, actions } = songs;
export const { fetch, setSong } = actions;
export default reducer;
