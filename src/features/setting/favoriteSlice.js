import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.songs.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const index = state.songs?.findIndex(
        (song) => song.id === action.payload.id
      );
      const songs = state.songs;
      state.songs = [
        ...songs.slice(0, index),
        ...songs.slice(index + 1, songs.length),
      ];
    },
  },
});
const { reducer, actions } = favorite;
export const { addFavorite, removeFavorite } = actions;
export default reducer;
