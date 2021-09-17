import {configureStore} from '@reduxjs/toolkit';
import foodSliceReducer from './foods_slice';

export const store = configureStore({
  reducer: {
    counter: foodSliceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
