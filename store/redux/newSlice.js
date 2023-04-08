import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NEW_MOVIES } from '../../data/dummy-data';
// Define a thunk to fetch the data from the API
export const fetchNewData = createAsyncThunk('new/fetchNewData', async () => {
  
  //TODO: when BE is ready reapace with this
  // const response = await axios.get('/api/recomended-moview');
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [...NEW_MOVIES] });
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
const newSlice = createSlice({
  name: 'new',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewData.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchNewData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// Export the actions, reducer, and selectors
export const {} = newSlice.actions;
export default newSlice.reducer;

export const selectNewData = (state) => {
  return state.new.data;
};
export const selectIsLoading = (state) => state.new.isLoading;
export const selectError = (state) => state.new.error;
