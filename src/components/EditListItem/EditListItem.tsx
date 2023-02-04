import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { createRow, updateRow } from '../../store/rows/rowsSlice';

import { Row } from '../../types';

import './EditListItem.styles.scss';

interface IEditListItemProps {
  row?: Partial<Row>;
  parentId?: number;
  //   isNewRow: boolean;
  setIsEditing: (val: boolean) => void;
  setAddItem: (val: boolean) => void;
}

function EditListItem({
  row,
  parentId,
  //   isNewRow,
  setIsEditing,
  setAddItem
}: IEditListItemProps): React.ReactElement {
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
        console.log(item);
        await dispatch(createRow(item as Row));
        setAddItem(false);
        // setIsEditing(false);
      }
    }
  };

  return (
    <div className="edit-list-item">
      <input
        type="text"
        name="rowName"
        value={item.rowName}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="text"
        name="salary"
        value={item.salary}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="text"
        name="equipmentCosts"
        value={item.equipmentCosts}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="text"
        name="overheads"
        value={item.overheads}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="text"
        name="estimatedProfit"
        value={item.estimatedProfit}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default EditListItem;
