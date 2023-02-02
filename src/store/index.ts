import { configureStore } from '@reduxjs/toolkit';
import rowsReducer from './rows/rowsSlice';

export const store = configureStore({
  reducer: {
    rows: rowsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
