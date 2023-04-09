import { configureStore } from "@reduxjs/toolkit";
import recommendedReducer from "./recommendedSlice";
import favoritesReducer from "./favoritesSlice";
import newReducer from "./newSlice";

export const store = configureStore({
  reducer: {
    favoriteMovies: favoritesReducer,
    recommended: recommendedReducer,
    new: newReducer,
  },
});