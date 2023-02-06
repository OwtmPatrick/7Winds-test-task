import React from 'react';
import ListItem from '../ListItem';
import { Row } from '../../types';

import './List.styles.scss';

interface IListProps {
  rows: Array<Row>;
  nestingLevel?: number;
  nestingTotalLevel: number;
  children?: React.ReactElement | null;
}

function List({
  rows,
  nestingLevel = 0,
  nestingTotalLevel,
  children
}: IListProps): React.ReactElement {
  return (
    <div className={`list${nestingLevel === 0 ? ' list_main' : ''}`}>
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
        {children && <li>{children}</li>}
      </ul>
    </div>
  );
}

export default List;
