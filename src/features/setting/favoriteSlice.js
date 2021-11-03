import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducer: {
    fetch: (_, action) => {
      return {
        songs: action.payload,
      };
    },
    addFavorite: (state, action) => {
      state.songs.push(action.payload);
    },
  },
});
const { reducer, actions } = favorite;
export const { addFavorite, fetch } = actions;
export default reducer;
