import React, { useEffect } from 'react';
import Project from './Project';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { getRows } from '../../store/rows/rowsSlice';

function Container(): React.ReactElement {
  const rows = useAppSelector((state) => state.rows.rows);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRows());
  }, []);

  return <Project rows={rows} />;
}

export default Container;
