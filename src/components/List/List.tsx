import React, { useState } from 'react';
import ListItem from '../ListItem';
import EditListItem from '../EditListItem';
import { Row } from '../../types';

import './List.styles.scss';

interface IListProps {
  rows: Array<Row>;
  parentId?: number;
  nestingLevel?: number;
}

function List({ rows, parentId, nestingLevel = 0 }: IListProps): React.ReactElement {
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
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
