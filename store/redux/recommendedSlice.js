import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RECOMENDED_MOVIES } from '../../data/dummy-data';
// Define a thunk to fetch the data from the API
export const fetchData = createAsyncThunk('recommended/fetchData', async () => {
  
  //TODO: when BE is ready reapace with this
  // const response = await axios.get('/api/recomended-moview');
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [...RECOMENDED_MOVIES] });
    }, 1000);
  });
  return response.data
});

// Define the initial state for the slice
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create the slice and define reducers
const recommendedSlice = createSlice({
  name: 'recommended',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// Export the actions, reducer, and selectors
export const {} = recommendedSlice.actions;
export default recommendedSlice.reducer;

export const selectData = (state) => {
  return state.recommended.data;
};
export const selectIsLoading = (state) => state.recommended.isLoading;
export const selectError = (state) => state.recommended.error;
