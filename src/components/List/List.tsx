import React from 'react';
import ListItem from '../ListItem';
import { Row } from '../../types';

import './List.styles.scss';

interface IListProps {
  rows: Array<Row>;
  nestingLevel?: number;
  nestingTotalLevel: number;
}

function List({ rows, nestingLevel = 0, nestingTotalLevel }: IListProps): React.ReactElement {
  return (
    <div className="list" style={{ paddingLeft: '25px' }}>
      <ul className="list__list">
        {rows.map((row) => (
          <ListItem
            key={row.id}
            row={row}
            parentId={row.id}
            nestingLevel={nestingLevel + 1}
            isEditing={false}
            nestingTotalLevel={nestingTotalLevel}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
