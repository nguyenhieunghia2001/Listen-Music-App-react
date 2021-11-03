import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
};

const songs = createSlice({
  name: "music",
  initialState,
  reducers: {
    fetch: () => {},
    setSong: (state, action) => {
      state.songs = action.payload;
    },
  },
});
const { reducer, actions } = songs;
export const { fetch, setSong } = actions;
export default reducer;
