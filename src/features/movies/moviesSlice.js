 import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const MOVIES_URL = "http://localhost:5001/movies";

 const initialState = {
    movies:[],
    status: "idle",
    error: null,
  };



