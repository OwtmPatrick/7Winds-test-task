import { Row } from '../types';

export default function deleteRow(rows: Array<Row>, rId: number): Array<Row> {
  return rows.reduce((acc: Array<Row>, row) => {
    if (row.child && row.id !== rId) {
      const newChildren = deleteRow(row.child, rId);
      const newRow = { ...row, child: newChildren };

      acc.push(newRow);
    } else if (row.id !== rId) {
      acc.push(row);
    }

    return acc;
  }, []);
}
