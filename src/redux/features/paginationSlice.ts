import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialLimit: 5,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.initialLimit += 5;
    },
    previusPage: (state) => {
      state.initialLimit === 5
        ? state.initialLimit === 5
        : (state.initialLimit -= 5);
    },
  },
});

export const { nextPage, previusPage } = paginationSlice.actions;

export default paginationSlice.reducer;
