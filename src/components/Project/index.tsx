import React, { useEffect, useMemo } from 'react';
import Project from './Project';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { LoadingState } from '../../types';
import utils from '../../utils';

import { getRows } from '../../store/rows/rowsSlice';

function Container(): React.ReactElement {
  const { rows, loading } = useAppSelector((state) => state.rows);
  const dispatch = useAppDispatch();
  const nestingTotalLevel = useMemo(() => utils.getNestingLevel(rows), [rows]);

  useEffect(() => {
    dispatch(getRows());
  }, []);

  return (
    <Project
      rows={rows}
      nestingTotalLevel={nestingTotalLevel}
      isLoading={loading === LoadingState.PENDING}
    />
  );
}

export default Container;
