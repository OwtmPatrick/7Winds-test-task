import React from 'react';
import ListItem from '../ListItem';
import { Row } from '../../types';

import './List.styles.scss';

interface IListProps {
  rows: Array<Row>;
}

function List({ rows }: IListProps): React.ReactElement {
  return (
    <div className="list">
      <ul className="list__list">
        {rows.map((row) => (
          <ListItem key={row.id} row={row} parentId={row.id} />
        ))}
      </ul>
    </div>
  );
}

export default List;
