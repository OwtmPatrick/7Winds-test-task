import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import rowService from '../../services/rowService';
import { ENTITY } from '../../constants/entity';

import { RootState } from '../index';

import { LoadingState, Row } from '../../types';

export interface RowsState {
  entity: {
    id: number;
    rowName: string;
  };
  rows: Row[];
  loading: LoadingState;
  error: string | null;
}

const initialState: RowsState = {
  entity: ENTITY,
  rows: [],
  loading: LoadingState.IDLE,
  error: null
};

export const getRows = createAsyncThunk('rows/getRows', async (_, { getState }) => {
  const state = getState() as RootState;
  const { data } = await rowService.getRows(state.rows.entity.id);

  return data;
});

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    // setLoadingState: (state, action: PayloadAction<LoadingState>) => {
    //   state.loading = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRows.pending, (state) => {
        state.loading = LoadingState.PENDING;
        state.error = null;
      })
      .addCase(getRows.fulfilled, (state, action) => {
        state.rows = action.payload;
        state.loading = LoadingState.SUCCESS;
        state.error = null;
      })
      .addCase(getRows.rejected, (state, action) => {
        state.loading = LoadingState.ERROR;
        state.error = action.error as string;
      });
  }
});

// export const { setLoadingState } = rowsSlice.actions;

export default rowsSlice.reducer;
