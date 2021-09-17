import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://c178-152-57-232-136.ngrok.io/foods';

const initialState = [];

export const fetchFoods = createAsyncThunk('counter/fetchFoods', async () => {
  try {
    const response = await axios.get(URL);
    // console.log('dat ------------- data', response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      //   console.log('calling reducer', action.payload);
      state.push(action.payload);
    });
  },
});

export default counterSlice.reducer;
