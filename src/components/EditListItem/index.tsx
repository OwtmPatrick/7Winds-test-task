import React, { useState } from 'react';
import EditListItem from './EditListItem';

import { Row } from '../../types';
import { IEditListItemContainerProps } from './EditListItem.types';

import { useAppDispatch } from '../../store/hooks';
import { createRow, updateRow } from '../../store/rows/rowsSlice';

function Container({
  row,
  parentId,
  setIsEditing,
  addItem,
  setAddItem,
  nestingLevel
}: IEditListItemContainerProps): React.ReactElement {
  const [item, setItem] = useState({ ...row, parentId });
  const dispatch = useAppDispatch();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setItem({ ...item, [name]: name === 'rowName' ? value : Number(value) });
  }

  const onKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if ('id' in item) {
        await dispatch(updateRow({ rId: item.id!, row: item as Row }));
        setIsEditing(false);
      } else {
        await dispatch(createRow(item as Row));
        setAddItem(false);
      }
    }
  };

  return (
    <EditListItem
      item={item}
      parentId={parentId}
      setIsEditing={setIsEditing}
      addItem={addItem}
      setAddItem={setAddItem}
      nestingLevel={nestingLevel}
      // eslint-disable-next-line react/jsx-no-bind
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Container;
