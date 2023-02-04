import { Row } from '../types';

export default function createRow(rows: Array<Row>, current: Row, parentId?: number): Array<Row> {
  const copy = [...rows];
  const newItem = { ...current, child: [] };

  if (!parentId) {
    return [...copy, newItem];
  }

  const newRows = copy.map((row) => {
    if (row.child) {
      const newChildren = createRow(row.child, newItem, parentId);

      if (row.id === parentId) {
        return { ...row, child: [...newChildren, newItem] };
      }

      return { ...row, child: newChildren };
    }

    if (row.id === parentId) {
      return { ...row, child: [newItem] };
    }

    return row;
  });

  return newRows;
}
