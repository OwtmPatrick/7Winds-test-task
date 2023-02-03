import React, { useState } from 'react';

// @ts-ignore
import { ReactComponent as DocumentIcon } from '../../assets/document.svg';
// @ts-ignore
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';

import { Row } from '../../types';
import List from '../List';
import EditListItem from '../EditListItem';

import { useAppDispatch } from '../../store/hooks';
import { deleteRow } from '../../store/rows/rowsSlice';

import './ListItem.styles.scss';

interface IListItemProps {
  row?: Row;
  parentId?: number;
  nestingLevel?: number;
  isEditing: boolean;
}

function ListItem({
  row,
  parentId,
  nestingLevel = 0,
  isEditing: isEditingFromProps
}: IListItemProps): React.ReactElement {
  const [isEditing, setIsEditing] = useState<boolean>(isEditingFromProps);
  const [addItem, setAddItem] = useState<boolean>(false);
  const item = row || {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: '',
    salary: 0,
    supportCosts: 0,
    child: []
  };

  const dispatch = useAppDispatch();

  function deleteCurrentRow() {
    if ('id' in item) {
      dispatch(deleteRow(item.id));
    }
  }

  return (
    <li className="list-item">
      <div className="list-item__content" onDoubleClick={() => setIsEditing(true)}>
        <button type="button" onClick={() => setAddItem(true)}>
          <DocumentIcon />
        </button>

        <button type="button" onClick={deleteCurrentRow}>
          <TrashIcon />
        </button>

        {isEditing ? (
          <EditListItem
            row={item}
            // isNewRow={false}
            setIsEditing={setIsEditing}
            parentId={parentId}
          />
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>{item.rowName}</div>
            <div>{item.salary}</div>
            <div>{item.equipmentCosts}</div>
            <div>{item.overheads}</div>
            <div>{item.estimatedProfit}</div>
          </div>
        )}
      </div>
      <List rows={item.child} parentId={parentId} nestingLevel={nestingLevel} />
      {addItem && (
        <div style={{ paddingLeft: '25px' }}>
          {/* <EditListItem isNewRow setIsEditing={setIsEditing} parentId={parentId} /> */}
          <ListItem isEditing parentId={parentId} />
        </div>
      )}
    </li>
  );
}

export default ListItem;
