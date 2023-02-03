import { Row } from '../types';

export default function updatedRows(rows: Array<Row>, c: Array<Row>) {
  const copy = [...rows];

  const newRows: Array<Row> = copy.map((row) => {
    const changed = c.find((r: Row) => r.id === row.id);

    if (row.child && row.child.length) {
      const newChilds = updatedRows(row.child, c);

      if (changed) {
        return { ...row, ...changed, child: newChilds };
      }

      return { ...row, child: newChilds };
    }

    if (changed) {
      return { ...row, ...changed };
    }

    return row;
  });

  return newRows;
}
