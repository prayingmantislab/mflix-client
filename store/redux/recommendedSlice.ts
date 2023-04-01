import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RECOMENDED_MOVIES } from '../../data/dummy-data';

interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Poster: string;
  imdbRating: number;
  Year: number;
}

interface RecommendedState {
  data: Movie[];
  isLoading: boolean;
  error: string | null;
}

// Define a thunk to fetch the data from the API

export const fetchData = createAsyncThunk<Movie[], void>(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Movie[]>('/api/recommended-movies');
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

// export const fetchData = createAsyncThunk<RecommendedMovies>(
//   'recommended/fetchData',
//   async () => {
// TODO: when BE is ready reapace with this
// const response = await axios.get('/api/recomended-moview');

// const response = await new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({ data: [...RECOMENDED_MOVIES] });
//   }, 1000);
// });
// return response.data;
// add a type to the response
// }
// );

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
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.isLoading = false;
        //@ts-ignore
        state.data = action.payload;
      }
    );
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      //@ts-ignore
      state.error = action.payload as string; // you may need to add a type assertion here
    });
  },
});

// Export the actions, reducer, and selectors
export const {} = recommendedSlice.actions;
export default recommendedSlice.reducer;

export const selectData = (state: { recomended: RecommendedState }) => {
  return state.recomended.data;
};
export const selectIsLoading = (state: { recomended: RecommendedState }) =>
  state.recomended.isLoading;
export const selectError = (state: { recomonded: RecommendedState }) =>
  state.recomonded.error;
