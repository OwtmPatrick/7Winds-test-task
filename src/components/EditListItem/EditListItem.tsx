import React from 'react';

import { IEditListItemProps } from './EditListItem.types';

// @ts-ignore
import { ReactComponent as DocumentIcon } from '../../assets/document.svg';

import './EditListItem.styles.scss';

function EditListItem({
  item,
  addItem,
  nestingLevel,
  onChange,
  onKeyDown
}: IEditListItemProps): React.ReactElement {
  return (
    <div className={`edit-list-item${addItem ? ' edit-list-item_new-item' : ''}`}>
      {addItem && <DocumentIcon />}
      <div
        className={`edit-list-item__inner ${
          addItem ? ` edit-list-item__inner_lvl-${nestingLevel}` : ''
        }`}
      >
        <div className="edit-list-item__input-wrapper edit-list-item__input-wrapper_rowName">
          <input
            type="text"
            name="rowName"
            value={item.rowName}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="edit-list-item__input"
          />
        </div>

        <div className="edit-list-item__input-wrapper">
          <input
            type="text"
            name="salary"
            value={item.salary}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="edit-list-item__input"
          />
        </div>

        <div className="edit-list-item__input-wrapper">
          <input
            type="text"
            name="equipmentCosts"
            value={item.equipmentCosts}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="edit-list-item__input"
          />
        </div>

        <div className="edit-list-item__input-wrapper">
          <input
            type="text"
            name="overheads"
            value={item.overheads}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="edit-list-item__input"
          />
        </div>

        <div className="edit-list-item__input-wrapper">
          <input
            type="text"
            name="estimatedProfit"
            value={item.estimatedProfit}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="edit-list-item__input"
          />
        </div>
      </div>
    </div>
  );
}

export default EditListItem;
