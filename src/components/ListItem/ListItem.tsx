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

const newItem = {
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

interface IListItemProps {
  row?: Row;
  parentId?: number;
  nestingLevel?: number;
  isEditing: boolean;
  isRoot?: boolean;
  nestingTotalLevel: number;
}

function ListItem({
  row,
  parentId,
  nestingLevel = 0,
  isEditing: isEditingFromProps,
  isRoot,
  nestingTotalLevel
}: IListItemProps): React.ReactElement {
  const [isEditing, setIsEditing] = useState<boolean>(isEditingFromProps);
  const [addItem, setAddItem] = useState<boolean>(false);
  const item = row || newItem;

  const dispatch = useAppDispatch();

  function deleteCurrentRow() {
    if ('id' in item) {
      dispatch(deleteRow(item.id));
    }
  }

  return (
    <li className={`list-item${isRoot || nestingLevel === 1 ? ' list-item_root' : ''}`}>
      <div className="list-item__content">
        {!isRoot && (
          <div className="list-item__btns-wrapper">
            <div
              className={`list-item__btns-wrapper-inner${
                isEditing ? ' list-item__btns-wrapper-inner_is-editing' : ''
              }`}
            >
              <button type="button" className="list-item__btn" onClick={() => setAddItem(true)}>
                <DocumentIcon className="list-item__btn-icon" />
              </button>

              <button type="button" className="list-item__btn" onClick={deleteCurrentRow}>
                <TrashIcon />
              </button>
            </div>
          </div>
        )}

        <div style={{ paddingLeft: `${(nestingTotalLevel - nestingLevel) * 25}px`, flexGrow: 1 }}>
          {isEditing ? (
            <EditListItem
              row={item}
              setIsEditing={setIsEditing}
              parentId={parentId}
              setAddItem={setAddItem}
              addItem={false}
            />
          ) : (
            <div
              role="presentation"
              className="list-item__row"
              onDoubleClick={() => setIsEditing(true)}
            >
              <div className="list-item__row-item list-item__row-item_rowName">{item.rowName}</div>
              <div className="list-item__row-item">{item.salary}</div>
              <div className="list-item__row-item">{item.equipmentCosts}</div>
              <div className="list-item__row-item">{item.overheads}</div>
              <div className="list-item__row-item">{item.estimatedProfit}</div>
            </div>
          )}
        </div>
      </div>

      <List rows={item.child} nestingLevel={nestingLevel} nestingTotalLevel={nestingTotalLevel}>
        {addItem ? (
          <EditListItem
            row={newItem}
            setIsEditing={setIsEditing}
            parentId={parentId}
            setAddItem={setAddItem}
            addItem={addItem}
          />
        ) : null}
      </List>
    </li>
  );
}

export default ListItem;
