import React, { useState } from 'react';
import ListItem from './ListItem';

import { IListItemContainerProps } from './ListItem.types';

import { useAppDispatch } from '../../store/hooks';
import { deleteRow } from '../../store/rows/rowsSlice';

export const newItem = {
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

function Container({
  row,
  parentId,
  nestingLevel = 0,
  isEditing: isEditingFromProps,
  isRoot,
  nestingTotalLevel
}: IListItemContainerProps): React.ReactElement {
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
    <ListItem
      item={item}
      parentId={parentId}
      nestingLevel={nestingLevel}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      addItem={addItem}
      setAddItem={setAddItem}
      isRoot={isRoot}
      nestingTotalLevel={nestingTotalLevel}
      // eslint-disable-next-line react/jsx-no-bind
      deleteCurrentRow={deleteCurrentRow}
    />
  );
}

export default Container;
