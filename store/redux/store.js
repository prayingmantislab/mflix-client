import { configureStore } from "@reduxjs/toolkit";
import recommendedReducer from "./recommendedSlice";

export const store = configureStore({
  reducer: {
    // favoriteMovies: favoritesReducer,
    recommended: recommendedReducer
  },
});