import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/foods' + '';

const initialState = {arr: [], error: null};

export const fetchFoods = createAsyncThunk(
  'counter/fetchFoods',
  async (args, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      // console.log('calling reducer', action.payload);
      state.arr.push(...action.payload);
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default counterSlice.reducer;
