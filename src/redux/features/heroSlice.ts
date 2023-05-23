import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 50,
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { decrement, increment } = heroSlice.actions;

export default heroSlice.reducer
