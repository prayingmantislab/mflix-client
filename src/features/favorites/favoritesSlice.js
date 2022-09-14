import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies:[]
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = state.movies
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = favoriteSlice.actions

export default favoriteSlice.reducer