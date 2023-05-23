import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialLimit: 5,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    increment: (state) => {
      state.initialLimit += 5;
    },
    decrement: (state) => {
      state.initialLimit === 5
        ? state.initialLimit === 5
        : (state.initialLimit -= 5);
    },
  },
});

export const { decrement, increment } = paginationSlice.actions;

export default paginationSlice.reducer;
