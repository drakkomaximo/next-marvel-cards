import { Character } from "@/interfaces";
import { initialStateCharacterSlice } from "@/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: initialStateCharacterSlice  = {
  character: null,
};

export const chracterSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    getCharacter: (state, action: PayloadAction<Character>) => {
      state.character = action.payload;
    },
  },
});

export const { getCharacter } = chracterSlice.actions;

export default chracterSlice.reducer
