import React from 'react';

// @ts-ignore
import { ReactComponent as DocumentIcon } from '../../assets/document.svg';
// @ts-ignore
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';

import List from '../List';
import EditListItem from '../EditListItem';

import { newItem } from '.';

import { IListItemProps } from './ListItem.types';

import './ListItem.styles.scss';

function ListItem({
  parentId,
  nestingLevel = 0,
  isEditing,
  setIsEditing,
  addItem,
  setAddItem,
  item,
  isRoot,
  nestingTotalLevel,
  deleteCurrentRow
}: IListItemProps): React.ReactElement {
  return (
    <li className={`list-item${isRoot || nestingLevel === 1 ? ' list-item_root' : ''}`}>
      <div className={`list-item__content list-item__content_lvl-${nestingLevel - 1}`}>
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
            nestingLevel={nestingLevel}
          />
        ) : null}
      </List>
    </li>
  );
}

export default ListItem;
