import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import utils from '../../utils';
import rowService from '../../services/rowService';
import { ENTITY_ID } from '../../constants/entityId';

import { RootState } from '../index';

import { LoadingState, Row } from '../../types';

export interface RowsState {
  entityId: number;
  rows: Row[];
  loading: LoadingState;
  error: string | null;
}

const initialState: RowsState = {
  entityId: ENTITY_ID,
  rows: [],
  loading: LoadingState.IDLE,
  error: null
};

export const getRows = createAsyncThunk('rows/getRows', async (_, { getState }) => {
  const state = getState() as RootState;
  const { data } = await rowService.getRows(state.rows.entityId);

  return data;
});

export const createRow = createAsyncThunk('rows/createRow', async (row: Row, { getState }) => {
  const state = getState() as RootState;
  const { data } = await rowService.createRow(state.rows.entityId, row);

  return { data, parentId: row.parentId };
});

export const updateRow = createAsyncThunk(
  'rows/updateRow',
  async ({ rId, row }: { rId: number; row: Row }, { getState }) => {
    const state = getState() as RootState;
    const { data } = await rowService.updateRow(state.rows.entityId, rId, row);

    return data;
  }
);

export const deleteRow = createAsyncThunk('rows/deleteRow', async (rId: number, { getState }) => {
  const state = getState() as RootState;
  const { data } = await rowService.deleteRow(state.rows.entityId, rId);

  return { data, rId };
});

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get state
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
      })
      // create row
      .addCase(createRow.pending, (state) => {
        state.loading = LoadingState.PENDING;
        state.error = null;
      })
      .addCase(createRow.fulfilled, (state, action) => {
        const {
          data: { changed, current: currentRow },
          parentId
        } = action.payload;
        const newRows = utils.createRow(current(state).rows, currentRow, parentId);

        if (changed.length > 0) {
          const updatedRows = utils.updateRows(newRows, [...changed, currentRow]);

          state.rows = updatedRows;
        } else {
          state.rows = newRows;
        }

        state.loading = LoadingState.SUCCESS;
        state.error = null;
      })
      .addCase(createRow.rejected, (state, action) => {
        state.loading = LoadingState.ERROR;
        state.error = action.error as string;
      })
      // update row
      .addCase(updateRow.pending, (state) => {
        state.loading = LoadingState.PENDING;
        state.error = null;
      })
      .addCase(updateRow.fulfilled, (state, action) => {
        const changed = [...action.payload.changed, action.payload.current];
        const updatedRows = utils.updateRows(current(state).rows, changed);

        state.rows = updatedRows;
        state.loading = LoadingState.SUCCESS;
        state.error = null;
      })
      .addCase(updateRow.rejected, (state, action) => {
        state.loading = LoadingState.ERROR;
        state.error = action.error as string;
      })
      // delete row
      .addCase(deleteRow.pending, (state) => {
        state.loading = LoadingState.PENDING;
        state.error = null;
      })
      .addCase(deleteRow.fulfilled, (state, action) => {
        const {
          data: { changed },
          rId
        } = action.payload;

        const newRows = utils.deleteRow(current(state).rows, rId);

        if (changed.length > 0) {
          const updatedRows = utils.updateRows(newRows, changed);

          state.rows = updatedRows;
        } else {
          state.rows = newRows;
        }

        state.loading = LoadingState.SUCCESS;
        state.error = null;
      })
      .addCase(deleteRow.rejected, (state, action) => {
        state.loading = LoadingState.ERROR;
        state.error = action.error as string;
      });
  }
});

export default rowsSlice.reducer;
