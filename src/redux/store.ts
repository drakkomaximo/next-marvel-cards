import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./features/heroSlice";
import paginationReducer from "./features/paginationSlice";
import { marvelApi } from "./services/marvelApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    heroReducer,
    paginationReducer,
    [marvelApi.reducerPath]: marvelApi.reducer,
  },
  middleware: (getDefaultModdleware) =>
    getDefaultModdleware().concat([marvelApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
