import { Row } from '../../types';

export interface IListItemContainerProps {
  row?: Row;
  parentId?: number;
  nestingLevel?: number;
  isEditing: boolean;
  isRoot?: boolean;
  nestingTotalLevel: number;
}

export interface IListItemProps extends IListItemContainerProps {
  item: Omit<Row, 'id' | 'total'>;
  addItem: boolean;
  setAddItem: (val: boolean) => void;
  setIsEditing: (val: boolean) => void;
  deleteCurrentRow: () => void;
}
