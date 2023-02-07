import React from 'react';
import { Row } from '../../types';

export interface IEditListItemContainerProps {
  row?: Partial<Row>;
  parentId?: number;
  setIsEditing: (val: boolean) => void;
  addItem: boolean;
  setAddItem: (val: boolean) => void;
  nestingLevel?: number;
}

export interface IEditListItemProps extends IEditListItemContainerProps {
  item: Partial<Row>;
  addItem: boolean;
  nestingLevel?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
