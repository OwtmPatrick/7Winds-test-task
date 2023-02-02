import React from 'react';

import { Row } from '../../types';

import './ListItem.styles.scss';

interface IListItemProps {
  row: Row;
  parentId?: number;
  nestingLevel?: number;
}

function ListItem({ row, parentId, nestingLevel = 0 }: IListItemProps): React.ReactElement {
  console.log(nestingLevel);
  return (
    <div className="list-item" style={{ paddingLeft: `${nestingLevel * 10}px` }}>
      <div>item</div>
      {!!row.child.length && (
        <div>
          <ul>
            {row.child.map((r) => (
              <ListItem key={r.id} row={r} parentId={row.id} nestingLevel={nestingLevel + 1} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListItem;
