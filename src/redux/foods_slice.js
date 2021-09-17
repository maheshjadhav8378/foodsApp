import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/foods';

const initialState = [];

export const fetchFoods = createAsyncThunk('counter/fetchFoods', async () => {
  const response = await axios.get(URL);
  // console.log('dat ------------- data', response.data);
  const data = response.data;
  // console.log(data);
  return data;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      // console.log('calling reducer', action.payload);
      state.push(...action.payload);
    });
  },
});

export default counterSlice.reducer;
